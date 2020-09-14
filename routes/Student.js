const express = require('express');
const router = express.Router();
const StudentController = require('./../controllers/StudentController');

/* GET users listing. */
router.get('/', StudentController.studentView);
router.get('/add', StudentController.studentAddView);
router.post('/store', StudentController.insertStudent);
router.get('/edit/:id', StudentController.editStudent);
router.post('/update/:id', StudentController.updateStudent);
router.post('/delete/:id', StudentController.deleteStudent);

module.exports = router;