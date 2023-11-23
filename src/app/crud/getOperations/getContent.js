const firebase = require("../../database/dbConfig");

const rootRef = firebase.dbOperations.ref(firebase.db, '/');

const getAllData = function (callback) {

    firebase.dbOperations.get(rootRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                callback(snapshot.val());
            } else {
                throw new Error('Error fetching data');
            }
        }).catch(() => {
        callback(false);
    });
}

const getName = function (id, callback) {

    firebase.dbOperations.get(firebase.dbOperations.child(rootRef, `${id}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                callback(snapshot.val());
            } else {
                throw new Error('User does not exist');
            }
        }).catch(() => {
        callback(false);
    });
}

module.exports = {getAllData, getName};