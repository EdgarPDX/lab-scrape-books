const Request = require('./Request.js');
const parse = require('./parse.js');

describe('Parse Function', () => {
  it('returns an array of all books', async() => {
    const document = await Request(1);

    const allBookTitles = await parse(document);

    expect(allBookTitles).toEqual(expect.arrayContaining([
      { title: 'A Light in the Attic', coverImage: 'a-light-in-the-attic_1000/index.html', rating: 'Three', price:'£51.77', inStock: true },
      { title: 'Tipping the Velvet', coverImage: 'tipping-the-velvet_999/index.html', rating: 'One', price:'£53.74', inStock: true }
    ]));
  });  
});
