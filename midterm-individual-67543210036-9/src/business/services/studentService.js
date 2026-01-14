const repo = require('../../data/repositories/studentRepository');
const validator = require('../validators/studentValidator');

class StudentService {

    async getAllStudents(major, status) {
        const students = await repo.findAll(major, status);

        const active = students.filter(s => s.status === 'active').length;
        const graduated = students.filter(s => s.status === 'graduated').length;
        const suspended = students.filter(s => s.status === 'suspended').length;
        const avgGPA = students.length
            ? students.reduce((sum, s) => sum + s.gpa, 0) / students.length
            : 0;

        return {
            students,
            statistics: {
                active,
                graduated,
                suspended,
                total: students.length,
                averageGPA: Number(avgGPA.toFixed(2))
            }
        };
    }

    async getStudentById(id) {
        id = validator.validateId(id);
        const student = await repo.findById(id);
        if (!student) throw new Error('Student not found');
        return student;
    }

    async createStudent(data) {
        validator.validateStudentData(data);
        validator.validateStudentCode(data.student_code);
        validator.validateEmail(data.email);
        validator.validateMajor(data.major);
        return await repo.create(data);
    }

    async updateStudent(id, data) {
        id = validator.validateId(id);
        await this.getStudentById(id);
        return await repo.update(id, data);
    }

    async updateGPA(id, gpa) {
        id = validator.validateId(id);
        validator.validateGPA(gpa);
        await this.getStudentById(id);
        return await repo.updateGPA(id, gpa);
    }

    async updateStatus(id, status) {
        id = validator.validateId(id);
        validator.validateStatus(status);
        const student = await this.getStudentById(id);
        if (student.status === 'withdrawn')
            throw new Error('Cannot change status of withdrawn student');
        return await repo.updateStatus(id, status);
    }

    async deleteStudent(id) {
        id = validator.validateId(id);
        const student = await this.getStudentById(id);
        if (student.status === 'active')
            throw new Error('Cannot delete active student');
        await repo.delete(id);
    }
}

module.exports = new StudentService();
