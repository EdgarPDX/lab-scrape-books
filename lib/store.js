const BOOK = require('./models/book');

const store = books => {

  return Promise.all(
    books.map(book => BOOK.insert(book))
  );
  

};

module.exports = store;
