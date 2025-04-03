//baseUrl definition
const runSettings = require('../config/config.json')

module.exports = async (onabort, config) => {
    if(true) {
        config.baseUrl = 'https://www.saucedemo.com'
    }
    return config
}