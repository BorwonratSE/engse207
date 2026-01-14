const router = require('express').Router();
const c = require('../controllers/studentController');

router.get('/', c.getAllStudents);
router.get('/:id', c.getStudentById);
router.post('/', c.createStudent);
router.put('/:id', c.updateStudent);
router.patch('/:id/gpa', c.updateGPA);
router.patch('/:id/status', c.updateStatus);
router.delete('/:id', c.deleteStudent);

module.exports = router;
