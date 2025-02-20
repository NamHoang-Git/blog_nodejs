import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater'
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true }
}, { timestamps: true, },);

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all',
 });

export default mongoose.model('Course', Course);