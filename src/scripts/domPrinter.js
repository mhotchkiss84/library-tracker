// Importing the fetch functions
import fetchFunctions from './apiManager.js';
// Creating a object to store the dom printer functions
const domPrinter = {
	//Creating a function to print the form to the DOM
	printForm: () => {
		document.querySelector(`#form-container`).innerHTML = `
        <h3>Submit a new book</h3>
        <div id=form-div>
        <form id="create-entry">
        <label for="title">Title</>
        <input type="text" id="book-title">
        <label for="author">Author</>
        <input type="text" id="book-author">
        <label for="isbn">ISBN Number</>
        <input type="text" id="book-isbn">
        </form>
        </div>
        <div id="button-div">
        <button id="submit-btn">Submit</button>
        </div>
        `;
	},
	printBooks: () => {
		fetchFunctions.fetchBooks();
	},
	editBook: (editButtonID) => {
		fetchFunctions.singleBook(editButtonID).then((parsedBook) => {
			document.querySelector(`#book-${editButtonID}`).innerHTML = `<div id=form-div>
        <form id="edit-entry">
        <label for="edit-title">Title</>
        <input type="text" id="edit-book-title" value="${parsedBook.title}">
        <label for="author">Author</>
        <input type="text" id="edit-book-author" value="${parsedBook.author}">
        <label for="isbn">ISBN Number</>
        <input type="text" id="edit-book-isbn" value="${parsedBook.ISBN}">
        </form>
        </div>
        <div id="edit-button-div">
        <button id="save-btn">Save</button>
        </div>`;
		});
	}
};
// Exporting the domPrinter functions
export default domPrinter;
