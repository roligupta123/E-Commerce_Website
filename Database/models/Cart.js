const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Relationship: Cart → Product (Many-to-Many)
      required: [true, 'Product reference is required']
    },
    qty: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
      default: 1
    }
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Relationship: User → Cart (One-to-One)
      required: [true, 'User reference is required'],
      unique: true // One cart per user
    },
    items: {
      type: [cartItemSchema],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: 'Cart must have at least one item'
      }
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);
