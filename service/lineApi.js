// required modules
let request = require('request-promise');

// settings
let configs = require('../configs.js');
let settings = configs[configs.environment == 'product' ? 'product' : 'develop'];
// const logger = new (require('../controllers/Logger.js'))('fail-to-save');

// api base url
// const lineApi = settings.lineApi;

class lineApi {

    constructor() {
        this.callLineApi = this.callLineApi.bind();
    }

    /**
     * to save log through nodered (for mqtt)
     * @param {string} dbName 
     * @param {object} document 
     */
    callLineApi(routing, method, params){
        return LineApi(routing, method, params).then(result => {      
            console.log('success')      
            return Promise.resolve(result);
        })
        .catch((error) => {
            console.log('fail')
            return Promise.reject(error);
        })
    };
}

module.exports = new lineApi();

const LineApi = (routing, method, params) => {
    let url = settings.lineApi + routing;

    let endPoint = {
        'url': url,
        'method': method,
        'headers': {
            'content-type': 'application/json',
            'Authorization': `Bearer ${settings.lineToken}`
        },
        'body': JSON.stringify(params)
    };

    return request.post(endPoint).then((body) => {
        // let bodyJSON = JSON.parse(body);
        return Promise.resolve(body);

    }).catch((error) => {
        return Promise.reject(error);
    })
}