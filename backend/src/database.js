const mongoose= require('mongoose');


//esto se utiliza si en todo caso se quiere constatar que existe un abase de datos sino simplentwe se conextaraa la otra
const URI = process.env.MONGODB_URI? process.env.MONGODB_URI:'mongodb://localhost/databasemarco';


//con esto lo que estamos haciendo es obteniendo una cadena de conexion     
mongoose.connect(URI , {
    useNewUrlParser : true,
    useCreateIndex : true
});


const connection = mongoose.connection;
//luego cuando la conexion este abierta l que ejecutaremos sera
connection.once('open',()=>{
    console.log("la base de datos esta conectada");
})

 