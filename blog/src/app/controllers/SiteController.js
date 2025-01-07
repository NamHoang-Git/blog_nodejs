import Course from '../models/Course.js';
import mongooseUtil from '../../util/mongoose.js';

class SiteController {
    
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mongooseUtil.multipleMongooseToObj(courses)
                });
            })
            .catch(next);
        
        // res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }

}

export default new SiteController();