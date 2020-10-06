const dotenv = require('dotenv');
const path = require('path');
const filepath = path.join(__dirname, '../',process.env.NODE_ENV+'.env');

dotenv.config({
  path: path.resolve(filepath)
});



const config = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST ,
  PORT: process.env.PORT 


}
module.exports = { config };