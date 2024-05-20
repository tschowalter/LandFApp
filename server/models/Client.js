import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    time: {type: String, required: false},
    preferences: {type: Object, required: false}
})

const clientModel = mongoose.model('Client', clientSchema)
export {clientModel as Client}