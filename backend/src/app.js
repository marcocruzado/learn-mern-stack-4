const express = require('express');
const cors = require('cors');//esto nos ayuda a que dos servidores puedan intercambiar datos entre ellos
const app = express();

//configuraciones del servidor
app.set('port',  process.env.PORT || 4000 );




//middlerwaers funciones que se ejecutsarn luego de que se hagan peticiones a las rutas
app.use(cors());
app.use(express.json());


//rutas
app.get('/api/user' , (req,res)=>{res.send("user routes");});
app.get('/api/notes' , (req,res)=>{res.send("las npotas de marco");});



module.exports = app ;