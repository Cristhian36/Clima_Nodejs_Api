const lugar = require('./lugar/lugar');
const weather = require('./Weather/Weather');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima'
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatlng(direccion);
        let temp = await weather.getclima(coors.lat, coors.lat);

        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (error) {
        return `No se pudo  determinar el clima de ${ direccion}`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log(e);
    });