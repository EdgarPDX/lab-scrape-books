const Request = require('./Request');

describe('request function', () => {
  it('makes a request for book titles on front page', async() => {
    const document = await Request(1);

    expect(document.querySelector('.product_pod h3 a').getAttribute('title')).toEqual('A Light in the Attic');

  });
});
