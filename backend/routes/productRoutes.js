import express from 'express'
import {
  allProducts,
  getFeaturedProducts,
  getSpecialProducts,
} from '../controllers/productController.js'

const router = express.Router()

router.get('/featured', getFeaturedProducts)
router.get('/special', getSpecialProducts)
router.get('/all', allProducts)

export default router
