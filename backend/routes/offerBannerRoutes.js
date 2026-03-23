import { getOfferBanners } from '../controllers/offerBanners.js'
import express from 'express'

const router = express.Router()
router.get('/', getOfferBanners)

export default router
