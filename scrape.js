const Request = require('./lib/Request');
const parse = require('./lib/parse');
const store = require('./lib/store');
const pool = require('./lib/utils/pool');


Request()
  .then(document => parse(document))
  .then(books => store(books))
  .finally(() => pool.end());

