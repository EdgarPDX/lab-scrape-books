const Request = require('./lib/Request');
const parse = require('./lib/parse');
const store = require('./lib/store');


Request()
  .then(document => parse(document))
  .then(books => store(books));

