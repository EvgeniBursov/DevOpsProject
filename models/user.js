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
<<<<<<< HEAD
    }
=======
    },
    products:[{
        producct_id: {
            type: String,
            required: false
        }
    }]
>>>>>>> feature_version_3
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;