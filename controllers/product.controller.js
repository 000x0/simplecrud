const Produto = require("../models/product.model.js")

const getProdutos = async (req, res) => {
    try {
        const produto = await Produto.find({});
        res.status(200).json(produto);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const getProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findById(id);
        res.status(200).json(produto);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const createProduto = async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(200).json(produto);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const updateProduto = async (req, res) => {
    try {
        const { id } = req.params;
    
        const produto = await Produto.findByIdAndUpdate(id, req.body);
    
        if (!produto) {
          return res.status(400).json({ message: "Produto nao encontrado!" });
        }
        const updateProduto = await Produto.findById(id);
        res.status(200).json(updateProduto);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
const deleteProduto = async (req, res) => {
    try {
        const { id } = req.params;
    
        const produto = await Produto.findByIdAndDelete(id);
    
        if (!produto) {
          return res.status(404).json({ message: "Produto nao encontrado!" });
        }
        res.status(200).json({ message: "Produto deletado!" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
    getProdutos,
    getProduto,
    createProduto,
    updateProduto,
    deleteProduto
}