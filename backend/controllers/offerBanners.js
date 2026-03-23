import offerBanners from '../models/offerBanners.js'

export const getOfferBanners = async (req, res) => {
  try {
    const banners = await offerBanners.find({ active: '1' })

    const formattedBanners = banners.map((b) => ({
      ...b._doc, // keep all fields
      image: b.image
        ? `http://localhost:4000/${b.image.replace(/\\/g, '/')}`
        : null,
    }))

    res.json(formattedBanners)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
