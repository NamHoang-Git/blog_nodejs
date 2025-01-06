import newsRouter from './news.js';
import siteRouter from './site.js';

function route(app) {
    
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
    
    // app.post("/search", (req, res) => {
    //     console.log(req.body);
    
    //     res.send('');
    // });
}

export default route;