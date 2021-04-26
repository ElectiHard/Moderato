let books = [{name: "book", author: "jk rowling"}];

module.exports.getBooks = () => {
  return books;
};

module.exports.addBook = (book) => {
  books.push(book);
};

module.exports.updateBook = (bookId, newBookData) => {
  const bookIdx = books.indexOf(books.find((book) => book.id === bookId));
  if (bookIdx === -1) {
    throw Error("Book not found!");
  }
  books[bookIdx] = { ...books[bookIdx], ...newBookData };
};

module.exports.deleteBook = (bookId) => {
  books = books.filter((book) => book.id != bookId);
};
