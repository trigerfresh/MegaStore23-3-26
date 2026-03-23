import Product from '../models/Product.js'

export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.aggregate([
      { $match: { newArrival: '1', active: '1' } },
      { $sample: { size: 20 } }, // change 5 to however many random products you want
    ])

    const formatted = products.map((p) => ({
      id: p._id,
      title: p.itemName,
      // image: `http://localhost:4000/${p.image1}`,
      image1: p.image1
        ? `http://localhost:4000/${p.image1.replace(/\\/g, '/')}`
        : null,
      image2: p.image2
        ? `http://localhost:4000/${p.image2.replace(/\\/g, '/')}`
        : null,
      image3: p.image3
        ? `http://localhost:4000/${p.image3.replace(/\\/g, '/')}`
        : null,
      image4: p.image4
        ? `http://localhost:4000/${p.image4.replace(/\\/g, '/')}`
        : null,
      price: p.price,
      productDescription: p.productDescription,
    }))

    res.json(formatted)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSpecialProducts = async (req, res) => {
  try {
    const products = await Product.aggregate([
      { $match: { special: '1' } }, // filter special products
      { $sample: { size: 10 } }, // randomly pick 10 products (or all if you want)
    ])

    const formatted = products.map((p) => ({
      id: p._id,
      title: p.itemName,
      // image: `http://localhost:4000/${p.image1}`,
      image1: p.image1
        ? `http://localhost:4000/${p.image1.replace(/\\/g, '/')}`
        : null,
      image2: p.image2
        ? `http://localhost:4000/${p.image2.replace(/\\/g, '/')}`
        : null,
      image3: p.image3
        ? `http://localhost:4000/${p.image3.replace(/\\/g, '/')}`
        : null,

      price: p.price,
      productDescription: p.productDescription,
    }))

    res.json(formatted)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const allProducts = async (req, res) => {
  try {
    const products = await Product.find({ hide: 'N' })

    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
