import express from 'express';
import { Admin } from '../models/Admin.js';
import { Client } from '../models/Client.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login', async (req, res) => {
    console.log('Login endpoint hit');
    try {
        const { username, password, role } = req.body;
        if (!username || !password || !role) {
            return res.status(400).json({ message: 'Missing username, password, or role' });
        }

        let user;
        let key;
        if (role === 'admin') {
            user = await Admin.findOne({ username });
            key = process.env.Admin_Key;
        } else if (role === 'client') {
            user = await Client.findOne({ username });
            key = process.env.Client_Key;
        } else {
            return res.status(400).json({ message: 'Invalid role' });
        }

        if (!user) {
            return res.status(404).json({ message: `${role} not registered` });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        const token = jwt.sign({ username: user.username, role }, key);
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        return res.json({ login: true, role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Invalid Admin' });
    }

    jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.username = decoded.username;
        req.role = decoded.role;
        next();
    });
};

export { router as AdminRouter, verifyAdmin };
