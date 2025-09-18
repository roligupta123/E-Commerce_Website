const mongoose = require('mongoose');

// Review sub-schema
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Product → Review (One-to-Many)
      required: true
    },
    comment: {
      type: String,
      required: [true, 'Review comment is required']
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Product description is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    category: {
      type: String,
      required: [true, 'Category is required']
    },
    brand: {
      type: String,
      required: [true, 'Brand is required']
    },
    images: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.every(url => typeof url === 'string');
        },
        message: 'Images must be an array of strings (URLs)'
      }
    },
    countInStock: {
      type: Number,
      required: true,
      min: [0, 'Stock cannot be negative'],
      default: 0
    },
    ratings: {
      type: Number,
      default: 0,
      min: [0, 'Ratings cannot be negative'],
      max: [5, 'Ratings cannot exceed 5']
    },
    reviews: [reviewSchema], // Embedded reviews
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
productSchema.index({ name: 'text' });
productSchema.index({ category: 1, brand: 1 });
productSchema.index({ category: 1, price: -1 });

