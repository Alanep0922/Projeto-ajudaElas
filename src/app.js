require('dotenv').config() 
const express = require("express") 
const cors = require("cors") 
const app = express() 
const database = require('./database/mongoConfig') 
const rotas = require('./routes/voluntariaRoutes')
const router = require ("./routes/beneficiadasRoutes")

app.use(express.json()) 
app.use(cors()) 
app.use("/voluntaria", rotas);
app.use("/beneficiadas", router);




database.connect() 
module.exports = app