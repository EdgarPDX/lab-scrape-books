const Request = require('./Request');
const parse = require('./parse');


module.exports = job => {
  console.log(`scraping page ${job.data.page}`);
  return Request(job.data.page)
    .then(parse);
    
};
