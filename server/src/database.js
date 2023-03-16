// importing mongoose package
const mongoose = require('mongoose');

// destructuring mongodb url form .env file
const {MONGODB_URL} = process.env;

exports.dbConnect = () => {
    mongoose.connect(MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('DB Connection Successful');
    })
    .catch((error) => {
        console.log('DB Connection Failed');
        console.log(error);
        process.exit(1);
    })
}
