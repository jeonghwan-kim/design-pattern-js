class Aggtregate {
  iterator() {}
}
class Iterator {
  hasNext() {}
  next() {}
}
class Book {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class BookShelf extends Aggtregate {
  constructor() {
    super();
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
  iterator() {
    return new BookShelfIterator(this);
  }
}
class BookShelfIterator extends Iterator {
  constructor(bookShelf) {
    super();
    this.bookShelf = bookShelf;
    this.index = 0;
  }
  hasNext() {
    return this.index < this.bookShelf.length;
  }
  next() {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}

let bookShelf = new BookShelf();
bookShelf.appendBook(new Book('Around the World in 80 Days'));
bookShelf.appendBook(new Book('Bible'));
bookShelf.appendBook(new Book('Cinderella'));
bookShelf.appendBook(new Book('Daddy-Long-Legs'));
let it = bookShelf.iterator();
while (it.hasNext()) {
  const book = it.next();
  console.log(book.getName());
}
