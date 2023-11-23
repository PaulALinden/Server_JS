const firebase = require("../../database/dbConfig");

const deleteName = function(res,endpoint, callback){

    const removeNameRef = firebase.dbOperations.ref(firebase.db, endpoint);

    firebase.dbOperations.get(removeNameRef)
        .then(snapshot => {
            if (snapshot.exists()) {
                firebase.dbOperations.remove(removeNameRef).then(() => callback(true));
            } else {
                throw new Error('Endpoint does not exist');
            }
        })
        .catch(() => {
            callback(false);
        });
}

module.exports = {deleteName};