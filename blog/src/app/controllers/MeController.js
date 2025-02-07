import Course from '../models/Course.js';
import mongooseUtil from '../../util/mongoose.js';

class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) => res.render('me/stored-courses.hbs', {
                deletedCount,
                courses: mongooseUtil.multipleMongooseToObj(courses)
            }))
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted: true})
            .then((courses) => res.render('me/trash-courses.hbs', {
                courses: mongooseUtil.multipleMongooseToObj(courses)
            }))
            .catch(next);
    }
}

export default new MeController();