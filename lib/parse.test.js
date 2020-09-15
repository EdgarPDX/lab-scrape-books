const Request = require('./Request.js');
const parse = require('./parse.js');

describe('Parse Function', () => {
  it('returns an array of all book titles', async() => {
    const document = await Request();

    const allBookTitles = parse(document);

    expect(allBookTitles).toEqual(expect.arrayContaining([
      { title: 'A Light in the Attic' },
      { title: 'Tipping the Velvet' }
    ]));
  });  
});
