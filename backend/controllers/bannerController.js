import Banner from '../models/BannerSchema.js'

export const getAllBanners = async (req, res) => {
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
}
