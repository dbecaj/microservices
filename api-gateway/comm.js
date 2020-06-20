const http = require('http');

module.exports.get = (options, onResult) => {
    let result = '';

    const req = http.get(options, (res) => {
        res.setEncoding('utf-8');

        res.on('data', (chunk) => {
            result += chunk;
        })

        res.on('end', () => {
            let obj = JSON.parse(result);
            onResult(res.statusCode, obj);
        })
    })

    req.on('error', (err) => {
        onResult(err.statusCode, err);
    })

    req.end();
}