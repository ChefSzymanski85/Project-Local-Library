// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const { findBookById } = require("./books");

function findAccountById(accounts, id) {
  const findAccount = accounts.find((account) => account.id === id);
  return findAccount;
}

function sortAccountsByLastName(accounts) {
  const sortAccounts = accounts.sort((lastNameA, lastNameB) =>
    lastNameA.name.last > lastNameB.name.last ? 1 : -1
  );
  return sortAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  const filterBooks = books.filter((book) => {
    return book.borrows.some((Ids) => Ids.id === account.id);
  });
  return filterBooks.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(
      ({ borrows }) => borrows[0].id === account.id && !borrows[0].returned
    )
    .map((book) => {
      const author = authors.find((auth) => auth.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
