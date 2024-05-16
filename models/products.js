import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    products: [{
        product_name: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        },
        user_email: {
            type: String,
            required: true
        },
        product_id: {
            type: String,
            required: true
        },
        product_des:{
            type: String,
            required: true
        },
        product_price:{
            type: String,
            required: true
        }
    }]
}, { timestamps: true });
const Product = mongoose.model('Product', ProductSchema);
export default Product;