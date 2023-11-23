const firebase = require("../../database/dbConfig");

const addName = function (res, key, newName, callBack) {
    const newNameRef = firebase.dbOperations.ref(firebase.db, key);

    firebase.dbOperations.set(newNameRef, {
        name: newName
    }).then(() => callBack(true)).catch(()=> callBack(false));
}

const updateName = function (res, key, newName, callback) {
    const updateNameRef = firebase.dbOperations.ref(firebase.db, key);
    firebase.dbOperations.update(updateNameRef, {
        name: newName
    }).then(() => callback(true)).catch(()=> callback(false));
}

module.exports = {addName, updateName}