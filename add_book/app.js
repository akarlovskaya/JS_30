// Book Constructor
function Book(title, author, isbn){
    this.title = title || '';
    this.author = author || '';
    this.isbn = isbn || '';
}

// UI Constructor
function ConstructorUI() {}
// Add method addBookToList() to ConstructorUI prototype

ConstructorUI.prototype.addBookToList = function(book){
    console.log(book);
    // get table body element
    var bookListEl = document.getElementById('book-list');
    // create row element
    var rowEl = document.createElement('tr');
    // add it to table tbody
    bookListEl.append(rowEl);
    console.log(bookListEl);

    // create cell for 

};



// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //get form fields values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    // Instantiate book
    var book = new Book(title, author, isbn);

    // Instantiate ConstructorUI
    var ui = new ConstructorUI();

    // Add a book to List
    ui.addBookToList(book);

    e.preventDefault();
});
