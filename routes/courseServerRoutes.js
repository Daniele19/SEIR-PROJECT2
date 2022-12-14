const students = require('../controllers/studentServerController');
const courses = require('../controllers/courseServerController');
//
module.exports = function (app) {
        app.route('/courses')
            .get(courses.list)
            .post(students.requiresLogin, courses.create);
        //
        app.route('/courses/:courseId')
            .get(courses.read)
            .put(students.requiresLogin, courses.hasAuthorization, courses.
                update)

            .delete(students.requiresLogin, courses.hasAuthorization, courses.
                delete);
        app.route('/coursesofstudent/:studentId')
            .get(courses.read);
        
        app.route('/StudentsEnrolledInCourse/:courseCode')
            .get(courses.read);
        app.param('courseId', courses.courseById);
        app.param('courseCode', courses.studentsInCourse);
        app.param('studentId',courses.coursesOfStudent);
};
