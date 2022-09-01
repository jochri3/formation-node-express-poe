const {Router} = require("express");
const {categoryController} = require("./category.controller");
const {logger} = require("../middlewares/logger");
const {validateBody} = require("./category.validate-middleware");




const CategoryRouter=Router();

CategoryRouter.get("/",[logger],categoryController.findAll)
CategoryRouter.get("/:id",[logger],categoryController.findOne)
CategoryRouter.delete("/:id",[logger],categoryController.deleteOne)
CategoryRouter.post("/",[logger,validateBody],categoryController.createOne)
CategoryRouter.patch("/:id",[logger,validateBody],categoryController.updateOne)

module.exports.CategoryRouter=CategoryRouter;