// Fs the File System Module
// As we are using data stored in our machine and we need to access it
// wee need to use this Node Module which helps us to interact with the data
const fs = require("fs");

// Helper to increment the id +1
// searches in thee array for the last entry and then ++
// to return the new id incremented by 1
const getNewId = array => {
    // Passing the array and chekiang the length > 0
    if (array.length > 0) {
        // if > 0 then we find the last entry and ++
        return array[array.length - 1].id++;
    } else {
        // Otherwise we return 1
        return 1;
    }
};

// Helper to new Date()
// As we need to add to our data the fields "created_at" or "updated_at"
// and populated with a date we use the Date Module for it
// That result is the server date in ISO 8601
const newDate = () => {
    // converting Date to be a string
    new Date().toString();
};

// Helper to check if a row exist by ID and return a promise
// Read one, Update and Delete
const mustBeInArray = (array, id) => {
    // Promise accepts 2 arguments callbacks provided by JS
    // Resolve if the promise success with a result
    // Rejects if the error occur
    return new Promise((resolve, reject) => {
        // Row we check if exist the id in the array
        const row = array.find(r => r.id === id);
        if (!row) {
            // If not row then we reject and show an message and status 404
            reject({
                message: "ID is not good",
                status: "404"
            });
        }
        // Else we resolve the Promise result
        resolve(row);
    });
};

// Helper to write Data to the JSON fine
// 2 params the name of the file and file content
const writeJSONFile = (filename, content) => {
    // We use FS to write the JSON Data content into the filename
    fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
        // If any error we show in console
        if (err) {
            console.log(err);
        }
    });
};

// We export the methods to be accessible
module.exports = {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile
};
