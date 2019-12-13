const fileName = "../../db/students.json"
let students = require(fileName)
const helper = require("../../helpers/fs.helper")

const getStudents = () => {}
const getStudent = (id) => {}
const postStudent = (newStudent) => {}
const updateStudent = (id, newStudent) => {}
const deleteStudent = (id) => {}

module.exports = {
    getStudents,
    getStudent,
    postStudent,
    updateStudent,
    deleteStudent
}
