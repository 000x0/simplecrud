const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, "Insira o nome do produto"],
    },

    quantidade: {
      type: Number,
      required: true,
      default: 0,
    },

    preco: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Produto = mongoose.model("Produto", ProductSchema)

module.exports = Produto