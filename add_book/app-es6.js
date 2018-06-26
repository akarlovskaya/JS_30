/*jshint esversion: 6 */

// Book class
class Book {
    constructor(title, author, isbn){
        this.title = title || '';
        this.author = author || '';
        this.isbn = isbn || '';
    }
}

// ConstructorUI class
class ConstructorUI {
    // Method addBookToList
    addBookToList(book) {
        // get table body element
        const BOOK_LIST_EL = document.getElementById('book-list');
        // create row element
        const ROW_EL = document.createElement('tr');
        // create cells and them to the table body
        ROW_EL.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        BOOK_LIST_EL.appendChild(ROW_EL);
    }

    // Show Alert
    showAlert(message, className) {
        // Create div
        const ALERT_MSG_DIV = document.createElement('div');
        // Add class className
        ALERT_MSG_DIV.className = 'alert ' + className;
        // Add text message
        ALERT_MSG_DIV.appendChild(document.createTextNode(message));
        // Get parent element
        const PARENT_EL = document.querySelector('.container');
        // Get sibling Element (form)
        const FORM_EL = document.getElementById('book-form');
        // Add alertDiv to parentEl
        PARENT_EL.insertBefore(ALERT_MSG_DIV, FORM_EL);
        // Remove alertDiv after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // Clear fields constructor
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    deleteBook(target) {
        if ( target.className === 'delete' ) {
            target.parentElement.parentElement.remove();
        }
    }
}

// Local Storage
class Store {
    static getBooks(){
        let books;
        // check if localStorage has items
        if ( localStorage.getItem('BOOKS') === null ) {
            books = [];
        } else {
            // wrap in JSON.parse() to get JS object
            books = JSON.parse(localStorage.getItem('BOOKS'));
        }
        return books;
    }
    // Display Books in UI
    static displayBooks(){
        const BOOKS = Store.getBooks();
        BOOKS.forEach(function(book){
            const UI = new ConstructorUI();
            // Add addBookToList method to ConstructorUI
            UI.addBookToList(book);
        });
    }

    static addBook(book){
        const BOOKS = Store.getBooks();
        BOOKS.push(book);
        localStorage.setItem('BOOKS', JSON.stringify(BOOKS));
    }

    static removeBook(isbn){
        const BOOKS = Store.getBooks();
        BOOKS.forEach( function(book, index){
            if ( book.isbn === isbn ) {
                // remove this book from BOOKS array
                BOOKS.splice(index, 1);
            }
        });
        localStorage.setItem('BOOKS', JSON.stringify(BOOKS));
    }
}

// DOM Load Event - show book from Local Storage
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener for add a book
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form fields values
    const TITLE = document.getElementById('title').value;
    const AUTHOR = document.getElementById('author').value;
    const ISBN = document.getElementById('isbn').value;

    // Instantiate book
    let book = new Book(TITLE, AUTHOR, ISBN);

    // Instantiate ConstructorUI
    let ui = new ConstructorUI();

    //Validation
    if (!TITLE || !AUTHOR || !ISBN) {
        ui.showAlert('Enter book info', 'error');
    } else {
        // Add a book to List
        ui.addBookToList(book);
        // Add to Local Storage
        Store.addBook(book);
        // Show success msg
        ui.showAlert('Book added', 'success');
        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event listener for delete
document.querySelector('#book-list').addEventListener('click', function(e){
    // Instantiate ConstructorUI
    let ui = new ConstructorUI();
    // Delete book
    ui.deleteBook(e.target);
    // Remove book from Local Storage (targeting <td> element with ISBN content as unique id)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    // Show message
    ui.showAlert('Book deleted', 'success');

    e.preventDefault();
});
