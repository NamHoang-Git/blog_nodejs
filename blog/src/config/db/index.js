import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/example_app_dev');
        console.log("Done!!")
    } catch (error) {
        console.log("Error!!")
    }
}

export default { connect };