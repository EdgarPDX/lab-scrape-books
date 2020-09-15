const pool = require('../utils/pool');

class BOOK {
    title;
    coverImage;
    rating;
    price;
    inStock;


    constructor(row) {
      this.title = row.title;
      this.coverImage = row.cover_image;
      this.rating = row.rating;
      this.price = row.price;
      this.inStock = row.in_stock;
    }

    static async insert(book) {
      const { rows } = await pool.query(
        'INSERT INTO books (title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [book.title, book.coverImage, book.rating, book.price, book.inStock]
      );

      return new BOOK(rows[0]);
    }

}

module.exports = BOOK;
