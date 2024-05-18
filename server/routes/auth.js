import express from 'express'
import { Admin } from '../models/Admin.js'
import { Client } from '../models/Client.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const router = express.Router();

router.post('/login', async (req, res) => {
    try{
        const {username, password, role} = req.body;
        if (role === 'admin') {
            const admin = await Admin.findOne({username})
            if (!admin) {
                res.json({message: "admin not registered"})
            }
            const validPassword = await bcrypt.compare(password, admin.password)
            if (!validPassword) {
                return res.json({message: 'wrong password'})
            }
            const token = jwt.sign({username: admin.username, role: 'admin'}, process.env.Admin_Key)
            res.cookie('token', token, {httpOnly: true, secure: true})
            return res.json({login:true, role: 'admin'})
        } else if (role === 'client') {
            const client = await Client.findOne({username})
            if (!client) {
                return res.json({message: "client not registered"})
            }
            const validPassword = await bcrypt.compare(password, client.password)
            if (!validPassword) {
                return res.json({message: 'wrong password'})
            }
            const token = jwt.sign({username: client.username, role: 'client'}, process.env.Client_Key)
            res.cookie('token', token, {httpOnly: true, secure: true})
            return res.json({login: true, role: 'client'})
        } else {
            console.log('invalid role');
        }
    } catch(err) {
        res.json(err)
    }
})

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({message: "Invalid Admin"})
    } else {
        jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
            if(err) {
                return res.json({message: "Invalid token"})
            } else {
                req.username = decoded.username;
                req.role = decoded.role;
                next()
            }
        })
    }
}

export {router as AdminRouter, verifyAdmin}