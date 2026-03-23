import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    productid: {
      type: Number,
      required: true,
      unique: true,
    },

    itemName: {
      type: String,
    },

    productDescription: {
      type: String,
    },

    brand: {
      type: String,
    },

    image1: {
      type: String, // store main image only
      default: '',
    },

    image2: {
      type: String, // store main image only
      default: '',
    },

    image3: {
      type: String, // store main image only
      default: '',
    },

    images: [
      {
        type: String,
      },
    ],

    price: {
      type: Number,
      required: true,
    },

    salePrice: {
      type: Number,
    },

    weight: {
      type: Number,
    },

    featured: {
      type: String,
      default: false,
    },

    special: {
      type: String,
      default: false,
    },

    deals: {
      type: String,
      default: false,
    },

    popular: {
      type: String,
      default: false,
    },

    hide: {
      type: String,
      default: 'N',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Product', productSchema)
