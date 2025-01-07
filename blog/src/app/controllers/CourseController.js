import Course from '../models/Course.js';
import mongooseObj from '../../util/mongoose.js';

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show.hbs', { course: mongooseObj.mongooseToObj(course) });
            })
            .catch(next);
    }

}

export default new CourseController();