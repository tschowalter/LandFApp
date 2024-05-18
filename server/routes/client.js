import express from 'express'
import { Client } from '../models/Client.js'
import bcrypt from 'bcrypt'
const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/register', verifyAdmin, async (req, res) => {
    try {
        const {id, username, password} = req.body;
        const client = await Client.findOne({username})
        if (client) {
            return res.json({message: "client is registered"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newClient = new Client({
            id: id,
            username: username,
            password: hashPassword
        })
        await newClient.save()
        return res.json({registered: true})
    } catch(err) {
        return res.json({message: "error in registering client: " + err})
    }
})

export {router as clientRouter}