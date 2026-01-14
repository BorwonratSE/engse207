const service = require('../../business/services/studentService');

class StudentController {

    async getAllStudents(req, res, next) {
        try {
            const result = await service.getAllStudents(req.query.major, req.query.status);
            res.json(result);
        } catch (e) { next(e); }
    }

    async getStudentById(req, res, next) {
        try {
            const student = await service.getStudentById(req.params.id);
            res.json(student);
        } catch (e) { next(e); }
    }

    async createStudent(req, res, next) {
        try {
            const student = await service.createStudent(req.body);
            res.status(201).json(student);
        } catch (e) { next(e); }
    }

    async updateStudent(req, res, next) {
        try {
            const student = await service.updateStudent(req.params.id, req.body);
            res.json(student);
        } catch (e) { next(e); }
    }

    async updateGPA(req, res, next) {
        try {
            const student = await service.updateGPA(req.params.id, req.body.gpa);
            res.json(student);
        } catch (e) { next(e); }
    }

    async updateStatus(req, res, next) {
        try {
            const student = await service.updateStatus(req.params.id, req.body.status);
            res.json(student);
        } catch (e) { next(e); }
    }

    async deleteStudent(req, res, next) {
        try {
            await service.deleteStudent(req.params.id);
            res.json({ message: 'Student deleted successfully' });
        } catch (e) { next(e); }
    }
}

module.exports = new StudentController();
