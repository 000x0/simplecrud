const express = require("express");
const Produto = require("../models/product.model.js")
const router = express.Router()
const {getProdutos, getProduto, createProduto, updateProduto, deleteProduto} = require('../controllers/product.controller.js')

router.get("/", getProdutos);
router.get("/:id", getProduto)
router.post("/", createProduto)
router.put("/:id", updateProduto)
router.delete("/:id", deleteProduto)

module.exports = router