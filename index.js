const express = require("express")
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const { dbConnection } = require("./config/db")
const routerApi = require("./routes/routesAPI")
const path = require('path');




app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routerApi);


dbConnection()


app.listen(PORT, () => console.log(`La aplicación está escuchando en el puerto http://localhost:${PORT}`))