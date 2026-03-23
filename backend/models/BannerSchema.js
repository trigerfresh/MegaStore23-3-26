import mongoose from 'mongoose'

const BannerSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    title: { type: String, default: null },
    image: { type: String, default: null },
    url: { type: String, default: null },
    active: { type: String, default: '1' },
    sortOrder: { type: Number, default: 0 },
    pageType: { type: [String], default: [] },
    titleOnBanner: { type: String, default: null },
    createdBy: { type: Number, default: null },
    createdOn: { type: Date, default: Date.now },
    modifiedBy: { type: Number, default: null },
    modifiedOn: { type: Date, default: null },
    disabledBy: { type: Number, default: null },
    disabledOn: { type: Date, default: null },
    branchId: { type: Number, default: null },
    companyId: { type: String, default: null },
  },
  {
    version: false,
  },
)

export default mongoose.model('Banner', BannerSchema)
