import mongoose from 'mongoose'

const primaryCategoriesSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    description: { type: String, default: '' },
    image: { type: String, default: 'assets/img/no-image.png' },
    active: { type: String, default: false },
    sow: { type: Boolean, default: true },
    primaryCategoriesName: { type: String, required: true },
    renderingImg: { type: String, default: '' },
    sortOrder: { type: Number, default: 0 },
    loginReq: { type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now },
    createdBy: { type: Number, default: 0 },
    modifiedOn: { type: Date },
    modifiedBy: { type: Number },
    disabledBy: { type: Number },
    disabledOn: { type: Date },
    branchId: { type: Number, default: 0 },
    companyId: { type: Number, default: 0 },
    homePage: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: 'primaryCategories', // must match your MongoDB collection
  },
)

// Model name can also be primaryCategories
export default mongoose.model('primaryCategories', primaryCategoriesSchema)
