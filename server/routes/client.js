import express from 'express';
import { Client } from '../models/Client.js';
import bcrypt from 'bcrypt';
import { verifyAdmin } from './auth.js';

const router = express.Router();

router.post('/register', verifyAdmin, async (req, res) => {
    try {
        const { id, username, password } = req.body;

        if (!id || !username || !password) {
            return res.status(400).json({ message: 'Missing id, username, or password' });
        }

        const existingClient = await Client.findOne({ username });
        if (existingClient) {
            return res.status(409).json({ message: 'Client is already registered' });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newClient = new Client({
            id,
            username,
            password: hashPassword,
        });

        await newClient.save();
        return res.status(201).json({ registered: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `Error in registering client: ${err.message}` });
    }
});

export { router as clientRouter };
