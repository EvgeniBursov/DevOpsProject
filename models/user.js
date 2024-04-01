import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    nubmer:{
        type: String,
        required: true
    },
    products:[{
        producct_id: {
            type: String,
            required: false
        }
    }]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;