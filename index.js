require('dotenv').config();

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');

//* Crear el servidor de express
const app = express();

//*Configurar CORS
app.use(cors());

//* base de datos
dbConnection();

//cDD2vVu7FrFK1dDg
//* Rutas
app.get('/', (req, res) => {
  res.status(400).json({
    ok: true,
    msg: 'Hola mundo',
  });
});

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puerto ', process.env.PORT);
});
