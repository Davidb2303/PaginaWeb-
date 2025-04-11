const { ImageURLToFile } = require("@excalidraw/excalidraw/data/blob");
const mongoose = require("mongoose");

require('dotenv').config();

const connectToMongo = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  }catch(error){
    console.error("Error al conectar a MongoDB: ", error);
  }
}

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
  accesorios: new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: Number,
  })
};

const getModelByCategory = async (categoryName) => {
  await connectToMongo();
  if (!schemas[categoryName]) throw new Error("Categoría no válida");

  return mongoose.models[categoryName] || mongoose.model(categoryName, schemas[categoryName], categoryName);
};

module.exports = getModelByCategory;