import express from 'express'
import { Client } from '../models/Client.js'
import bcrypt from 'bcrypt'
const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/register', verifyAdmin, async (req, res) => {
    try {
        const {id, username, password, hour, min, preferences} = req.body;
        const client = await Client.findOne({username})
        if (client) {
            return res.json({message: "client is registered"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newClient = new Client({
            id: id,
            username: username,
            password: hashPassword,
            time: '',
            preferences: {}
        })
        await newClient.save()
        return res.json({registered: true})
    } catch(err) {
        return res.json({message: "error in registering client: " + err})
    }
})

router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find()
        return res.json(clients)
    }
    catch(err) {
        return res.json(err)
    }
})

router.put('/update/:username', async (req, res) => {
    try {
        const client_username = req.params.username;
        const client = await Client.findOneAndUpdate({username: client_username}, req.body, {new: true})
        return res.json({updated: true, client})
    } catch(err) {
        return res.json(err)
    }
})

export {router as clientRouter}