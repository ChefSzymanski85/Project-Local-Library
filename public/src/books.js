// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id);
  return findAuthor;
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id);
  return findBook;
}

function partitionBooksByBorrowedStatus(books) {
  let partitionBooks = [];
  partitionBooks.push(books.filter(({ borrows }) => !borrows[0].returned));
  partitionBooks.push(books.filter(({ borrows }) => borrows[0].returned));
  return partitionBooks;
}

function getBorrowersForBook(book, accounts) {
  const accountId = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});
  return book.borrows
    .map(({ id, returned }) => ({
      ...accountId[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
