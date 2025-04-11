const express = require('express');
const router = express.Router();
const getModelByCategory = require('../models/categories');

router.get(':/nombre', async (req, res) => {
    const {nombre} = req.params;

    try{
        const CategoryModel = getModelByCategory(nombre.toLowerCase());
        const productos = await CategoryModel.find();
        res.json(productos);
    }catch(error){
        console.error(error);
        res.status(500).json({msg: "Error al obtener productos de la cateogria"});
    }
});

module.exports = router;