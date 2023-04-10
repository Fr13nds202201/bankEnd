require('dotenv').config()
const app = require('./app');
const { db } = require('./database/config')

const port = +process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App Running on port ${port}`);
});

//Conexión a la base de datos y sincronización
db.sync({ force: false }).then(() => {
    console.log("Conexión bd success !!");
}).catch(error => {
    console.log("se ha producido un error !!", error);
});