const parse = document => {
  const bookTitles = [...document.querySelectorAll('.product_pod')];

  return bookTitles.map(book => ({
    title: book.querySelector('h3 > a').getAttribute('title'),
    coverImage: book.querySelector('.image_container > a').getAttribute('href'),
    rating: book.querySelector('p').getAttribute('class').split(' ')[1],
    price: book.querySelector('.price_color').textContent,
    inStock: book.querySelector('.instock').textContent.includes('In stock') ? true : false
      
  }));
};

module.exports = parse;
