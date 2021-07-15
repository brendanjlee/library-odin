let myLibrary = []

function Book(title, author, numPages, read) {
  this.title = title
  this.author = author
  this.numPages = numPages
  this.read = read
  
  this.info = function() {
    return (`${this.title} by ${this.author}, ${this.numPages} pages.`)
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
  return 0
}

function removeBook(book) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (book.info() == myLibrary[i].info()) {
      myLibrary.splice(i, 1)
      return 1
    }
  }
  return 0
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(`Book ${i+1}: ${myLibrary[i].info()}`)
  }
}

// Testing
b1 = new Book("Magic Treehouse", "Joe Rogan", 300, true)
b2 = new Book("Book 2", "Samuel Jackson", 300, true)
b3 = new Book('The Hitchhiker\'s Guide to the Galaxy', 'Aurthor Douglass', 250, false)

addBookToLibrary(b1)
addBookToLibrary(b2)
addBookToLibrary(b3)

console.log('Library before removal')
displayBooks()

removeBook(b3)

console.log(`Removed ${b3.info()} from the library`)
displayBooks()
