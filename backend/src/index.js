require('dotenv').config(); //va a requerir las variables de entorno apenas inicie la aplicacion

const app = require('./app');
require('./database'); 


async function main() {
    await app.listen(app.get('port')); //como este es un etodo asisncrono tomara alfgo de tiempo para que inicie es servdor por eso ponemos await
    console.log("el seervidor esta escuchando en el puerto " + app.get('port'));  
}



main();
