const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { application, request, response } = require('express');
const getConnection = require('./libreria/conectar')

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',async (request,response,next)=>{
  try {
    const usuarios  = await getConnection();
    const rta = await usuarios.query('SELECT * FROM usuarios')
    response.json(rta.rows)
  } catch (error) {
    next(error);
  }
});

//usuarios
app.get('/usuario',(request,response)=>{response.json({id:1,
  nombre:'jose',apellido:'castillo'});
});

app.listen(port,()=>{
console.log(`API corriendo en el puesro ${port}`);
});