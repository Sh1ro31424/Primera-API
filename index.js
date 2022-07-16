const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { application, request, response } = require('express');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',(request,response)=>{
    response.json({info:'La API se esta ejecutando '});
});

//usuarios
app.get('/usuario',(request,response)=>{
    response.json({id:1,nombre:'jose',apellido:'castillo'});
});

app.listen(port,()=>{
    console.log(`API corriendo en el puesro ${port}`);
});