// server.js
const http = require('http');
const PORT_NUMBER = 3000;
const {initApp} = require('./database/dbConfig');

async function startServer() {
    //Get app init-status
    const statusDb = await initApp();
    const server = http.createServer((req, res) => {
        //If init-status is true
        if (statusDb) {
            // if database is initialized require operation methods
            const getOp = require("./crud/getOperations/getContent");
            const setOp = require("./crud/setOperations/setContent");
            const delOp = require("./crud/delOperations/deleteContent");
            const response = require("./responses/response");

            switch (req.url) {
                case '/':
                    getOp.getAllData((data) => {
                        response.allDataResponse(data, res)
                        res.end();
                    });
                    break;
                case  '/first':
                    getOp.getName('first', (data) => {
                        response.nameResponse(data, res)
                        res.end();
                    });
                    break;
                case  '/second':
                    getOp.getName('second', (data) => {
                        response.nameResponse(data, res)
                        res.end();
                    });
                    break;
                case  '/third':
                    getOp.getName('third', (data) => {
                        response.nameResponse(data, res)
                        res.end();
                    });
                    break;
                case  '/last':
                    getOp.getName('/last', (data) => {
                        response.nameResponse(data, res);
                        res.end();
                    });
                    break;
                case  '/new':
                    setOp.addName(res, 'last', 'Denice', (call) => {
                        response.saveResponse(res, call)
                        res.end();
                    })
                    break;
                case  '/update':
                    setOp.updateName(res, '/last', 'Adina', (call) => {
                        response.updateResponse(res, call)
                        res.end();
                    })
                    break;
                case  '/remove':
                    delOp.deleteName(res, "/last", (call) => {
                        response.removeResponse(res, call)
                        res.end();
                    })
                    break;
                default:
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.write('No page found');
                    res.end();
                    break;
            }
        } else {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Couldn\'t connect to server');
            res.end();
        }
    });
    return server;
}

(async () => {
    await startServer()
        .then(server => server.listen(PORT_NUMBER, () => {
            console.log('Server is running');
            module.exports = {server, PORT_NUMBER};
        }))
        .catch(e => console.log('Failed to start server'))
})();

