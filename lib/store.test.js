const fs = require('fs');
const pool = require('./utils/pool');
const store = require('./store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes array of book titles and saves them in DB', async() => {

    const books = [
      { title: 'A Light in the Attic', coverImage: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'Three', price:'£51.77', inStock: true },
      { title: 'Tipping the Velvet', coverImage: 'catalogue/tipping-the-velvet_999/index.html', rating: 'One', price:'£53.74', inStock: true },
      { title: 'The Giving Tree', coverImage: 'catalogue/the_giving_tree_999/index.html', rating: 'Four', price:'£50.00', inStock: false }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(3);

  });
});
