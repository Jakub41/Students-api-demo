// Validate the ID to be an INT
// We pass 3 arguments the request from client, the response from server to client
// and next to pass to next method
const mustBeInt = (req, res, next) => {
    // ID from params in the request
    const id = req.params.id;
    // Check if it is an INT
    if (!Number.isInteger(parseInt(id))) {
        // No INT then error message
        res.status(400).json({
            message: "ID must be an integer"
        });
    } else {
        // If yes then go to next method
        next();
    }
};

// Validation of the fields of the Student request
// before we start the Create and Update
// and assign the ID
const checkFieldsStudent = (req, res, next) => {
    // Student fields
    const { name, surname, email, dateofbirth } = req.body;

    // Fields are present then Next
    if (name && surname && email && dateofbirth) {
        next();
    } else {
        // No present we show the error
        res.status(400).json({ message: "Fields are not good" });
    }
};

// Export the methods
export default {
    mustBeInt,
    checkFieldsStudent
};
