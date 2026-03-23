import express from 'express'
import Banner from '../models/BannerSchema.js'
import { getAllBanners } from '../controllers/bannerController.js'

const router = express.Router()

router.get('/all', getAllBanners)
// Get all banners
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find().limit(3)

    const formattedBanners = banners.map((b) => ({
      // ...b._doc, // keep all fields
      image: b.image
        ? `http://localhost:4000/${b.image.replace(/\\/g, '/')}`
        : null,
      title: b.title,
    }))
    res.json({ success: true, formattedBanners })
    // console.log('Banners fetched:', banners.length)
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
})

// Get particular banner
router.get('/banner4', async (req, res) => {
  try {
    // Use findOne instead of find to get a single document
    const banner = await Banner.findOne({ id: 12, active: '1' })

    if (!banner) {
      return res.status(404).json({ message: 'Banner not found' })
    }

    res.json({
      id: banner._id,
      image: `http://localhost:4000/${banner.image.replace(/\\/g, '/')}`, // fix backslashes
      url: banner.url,
      title: banner.title,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
export default router
