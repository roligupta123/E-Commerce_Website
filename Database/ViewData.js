//  mock data view krne ke liye
// viewData.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import Product from './models/Product.js';
import Order from './models/Order.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

console.log('📦 Users:', await User.find());
console.log('📦 Products:', await Product.find());
console.log('📦 Orders:', await Order.find());

process.exit();
