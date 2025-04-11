const mongoose = require("mongoose");

const schemas = {
  tecnologia: new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: Number,
    brand: String
  }),
  cursos: new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: Number,
    duration: String,
    description: String
  }),
  deportes: new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: Number,
    brand: String
  }),
  hogar: new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: Number,
  })
};

const getModelByCategory = (categoryName) => {
  if (!schemas[categoryName]) throw new Error("Categoría no válida");

  return mongoose.models[categoryName] || mongoose.model(categoryName, schemas[categoryName], categoryName);
};

module.exports = getModelByCategory;