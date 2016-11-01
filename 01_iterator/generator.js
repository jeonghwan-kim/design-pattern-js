class BookShelf {
  constructor() {
    this.books = [];
  }
  appendBook(book) {
    this.books.push(book);
  }
  get length() {
    return this.books.length;
  }
  * gen() {
    for (let book of this.books) yield book;
  }
}
class Book {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let bookShelf = new BookShelf();
bookShelf.appendBook(new Book('Around the World in 80 Days'));
bookShelf.appendBook(new Book('Bible'));
bookShelf.appendBook(new Book('Cinderella'));
bookShelf.appendBook(new Book('Daddy-Long-Legs'));
for (book of bookShelf.gen()) console.log(book.name)
console.log([...bookShelf.gen()]);
