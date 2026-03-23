import primaryCategories from '../models/primaryCategories.js'

export const getCategories = async (req, res) => {
  try {
    // Query string '1' instead of Boolean true
    const categories = await primaryCategories
      .find({ active: '1' })
      .select('primaryCategoriesName image')

    const formatted = categories.map((cat) => ({
      id: cat._id,
      name: cat.primaryCategoriesName,
      image: `http://localhost:4000/${cat.image}`,
    }))

    res.json(formatted)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
