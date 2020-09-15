const parse = document => {
  const bookTitles = [...document.querySelectorAll('.product_pod h3 a')];

  return bookTitles.map(book => ({
    title: book.getAttribute('title')
      
  }));
};

module.exports = parse;
