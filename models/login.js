import mongoose from 'mongoose';

const LoginSchema = new Schema({
  userID: { type: ObjectId, required: true },
}, { timestamps: true });
const login = mongoose.model('LoggedIn', LoginSchema);
export default login;