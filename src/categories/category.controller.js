const { categoryService } = require('./category.service')

class CategoryController {
  constructor(categoryService) {
    this.categoryService = categoryService
  }
  findAll = async (_, res) => {
    const categories = await this.categoryService.findAll()
    res.send(categories)
  }

  findOne = async ({ params }, res) => {
    try {
      const id = params.id
      const category = await this.categoryService.findOne(id)
      res.send(category)
    } catch (err) {
      console.log('Erreur : ', err.message)
      res.status(404).send(err.message)
    }
  }

  deleteOne = async ({ params }, res) => {
    try {
      const id = params.id
      await this.categoryService.deleteOne(id)
      res.send('Catégorie supprimé avec succès')
    } catch (err) {
      console.log('Erreur : ', err.message)
      res.status(404).send(err.message)
    }
  }

  createOne = async ({ body }, res) => {
    try {
      await this.categoryService.createOne(body)
      res.status(201).send('Catégorie créée avec succès')
    } catch (err) {
      res.sendStatus(500)
      console.log(err)
    }
  }

  updateOne = async ({ params, body }, res) => {
    try {
      const id = params.id
      await this.categoryService.updateOne(id, body)
      res.send('Catégorie mis à jour avec succès')
    } catch (err) {
      console.log('Erreur : ', err.message)
      res.status(404).send(err.message)
    }
  }
}

module.exports.categoryController = new CategoryController(categoryService)
