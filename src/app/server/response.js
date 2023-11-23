const allDataResponse = function (data, res) {
    if (data !== false) {
        console.log(JSON.stringify(data));

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(data));
    } else {
        noContentMessage(res)
    }
}
const nameResponse = function (data, res) {
    if (data !== false) {
        const displayName = data.name;
        console.log(`Name: ${displayName}`);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(`Name: ${displayName}`);
    } else {
        noContentMessage(res)
    }
}
const saveResponse = function (res, call) {
    if (call) {
        console.log('Data saved successfully!');
        res.writeHead(201, {'Content-Type': 'text/plain'});
        res.write('Data saved successfully!');
    } else {
        badRequest(res, 'An Error occurred while saving');
    }
}
const updateResponse = function (res, call) {
    if (call) {
        console.log('Data update successfully!');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Data update successfully!');
    } else {
        badRequest(res, 'An Error occurred while updating');
    }
}
const removeResponse = function (res, call) {
    if (call) {
        console.log('Data removed successfully!')
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.write('Data removed successfully!')
    } else {
        badRequest(res, 'An Error occurred while trying to delete')
    }
}

//Internal file functions
function badRequest(res, error) {
    console.log('Bad request')
    res.writeHead(409, {'Content-Type': 'text/plain'});
    res.write(error);
}

function noContentMessage(res) {
    console.log(`No content`);
    res.writeHead(204, {'Content-Type': 'text/plain'});
    res.write('No content');
}

//Exports
module.exports = {allDataResponse, nameResponse, saveResponse, updateResponse, removeResponse}