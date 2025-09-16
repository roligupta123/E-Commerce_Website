import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Order from './models/Order.js';

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

const salesPerDay = await Order.aggregate([
  { $match: { isPaid: true } },
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      totalSales: { $sum: "$totalPrice" },
      ordersCount: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

console.log(salesPerDay);
process.exit();
