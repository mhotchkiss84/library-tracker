import fetchFunctions from './apiManager.js';
import domPrinter from './domPrinter.js';
// Creating an object for the event listener actions
const eventListeners = {
	// Creating a function for submitting a new book
	submitBookEvent: () => {
		const bookTitle = document.querySelector(`#book-title`).value;
		const bookAuthor = document.querySelector(`#book-author`).value;
		const bookISBN = document.querySelector(`#book-isbn`).value;
		const submitBookValues = {
			title: bookTitle,
			author: bookAuthor,
			ISBN: bookISBN
		};
        // console.log(submitBookValues);
        fetchFunctions.submitNewBook(submitBookValues)
    },
    deleteBookEvent: () => {
        let deleteBtnID = event.target.id.split(`-`)[2]
        fetchFunctions.deleteBook(deleteBtnID)

    },
    editBookEvent: () => {
        let editButtonID = event.target.id.split(`-`)[2]
        console.log(editButtonID)
        domPrinter.editBook(editButtonID)   
    }
};
// Exporting the event listener functions
export default eventListeners;
