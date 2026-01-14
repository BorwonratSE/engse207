const db = require('../database/connection');

class StudentRepository {

    async findAll(major, status) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM students';
            let params = [];
            let conditions = [];

            if (major) {
                conditions.push('major = ?');
                params.push(major);
            }
            if (status) {
                conditions.push('status = ?');
                params.push(status);
            }
            if (conditions.length > 0) {
                sql += ' WHERE ' + conditions.join(' AND ');
            }

            db.all(sql, params, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    async findById(id) {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    }

    async create(data) {
        const { student_code, first_name, last_name, email, major } = data;
        return new Promise((resolve, reject) => {
            db.run(
                `INSERT INTO students (student_code, first_name, last_name, email, major)
                 VALUES (?, ?, ?, ?, ?)`,
                [student_code, first_name, last_name, email, major],
                function (err) {
                    if (err) reject(err);
                    else {
                        db.get('SELECT * FROM students WHERE id = ?', [this.lastID],
                            (err, row) => err ? reject(err) : resolve(row)
                        );
                    }
                }
            );
        });
    }

    async update(id, data) {
        const { student_code, first_name, last_name, email, major } = data;
        return new Promise((resolve, reject) => {
            db.run(
                `UPDATE students 
                 SET student_code=?, first_name=?, last_name=?, email=?, major=?
                 WHERE id=?`,
                [student_code, first_name, last_name, email, major, id],
                err => err ? reject(err) : this.findById(id).then(resolve)
            );
        });
    }

    async updateGPA(id, gpa) {
        return new Promise((resolve, reject) => {
            db.run(
                'UPDATE students SET gpa=? WHERE id=?',
                [gpa, id],
                err => err ? reject(err) : this.findById(id).then(resolve)
            );
        });
    }

    async updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            db.run(
                'UPDATE students SET status=? WHERE id=?',
                [status, id],
                err => err ? reject(err) : this.findById(id).then(resolve)
            );
        });
    }

    async delete(id) {
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM students WHERE id=?', [id],
                err => err ? reject(err) : resolve()
            );
        });
    }
}

module.exports = new StudentRepository();
