class BookShelf {
  constructor() {
    this.books = [];
  }
  getBookAt(index) {
    return this.books[index];
  }
  appendBook(book) {
    this.books.push(book);
  }
  get length() {
    return this.books.length;
  }
  [Symbol.iterator]() {
    return {
      books: this.books,
      last: 0,
      next() {
        return this.last < this.books.length ?
        {value: this.books[this.last++], done: false} :
        {done: true}
      }
    }
  }
}
class Book {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

let bookShelf = new BookShelf();
bookShelf.appendBook(new Book('Around the World in 80 Days'));
bookShelf.appendBook(new Book('Bible'));
bookShelf.appendBook(new Book('Cinderella'));
bookShelf.appendBook(new Book('Daddy-Long-Legs'));
for (book of bookShelf) console.log(book.name)
// console.log([...bookShelf]);
