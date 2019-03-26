const axios = require('axios');


const getLugarLatlng = async(direccion) => {


    let encodeUrl = encodeURI(direccion);

    let mensaje = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAv-8bR7NpW4-bXdMGihoUVjSdhLceQc3c`)

    if (mensaje.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = mensaje.data.results[0];
    let cord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: cord.lat,
        lang: cord.lng
    }

}


module.exports = {
    getLugarLatlng
}