const axios = require('axios');


const getclima = async(lat, lng) => {

    let rep = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metricl&appid=ea571c919f017f89ebf85d31a00c177e`)

    return rep.data.main.temp;
}


module.exports = {
    getclima
}