const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const morgan = require("morgan");
const produtoRoute = require("./routes/product.route.js");
const app = express();

//Middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

app.use("/api/produtos", produtoRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.frbrq.mongodb.net/Node_API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("MongoDB Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("MongoDB Failed!");
  });
