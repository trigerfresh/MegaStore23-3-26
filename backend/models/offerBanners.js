import mongoose from 'mongoose'

const offerBannerSchema = new mongoose.Schema({
  id: Number,

  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  position: {
    type: String,
    default: '',
  },

  active: {
    type: String,
    default: '1',
  },

  url: {
    type: String,
    default: null,
  },

  sortOrder: {
    type: Number,
    default: 0,
  },

  pageType: {
    type: [String], // because sometimes array
    default: [],
  },

  titleOnBanner: {
    type: String,
    default: '0',
  },

  createdBy: Number,
  createdOn: Date,
  modifiedBy: Number,
  modifiedOn: Date,
})

export default mongoose.model('offerBanner', offerBannerSchema, 'offerBanners')
