const fs = require('fs');
const pool = require('./utils/pool');
const store = require('./store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes array of book titles and saves them in DB', async() => {

    const books = [
      { title: 'The Cat in the Hat' },
      { title: 'The Giver' },
      { title: 'To Kill a Mocking Bird' }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(3);

  });
});
