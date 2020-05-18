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
        domPrinter.editBook(editButtonID)   
    },
    saveBookEvent: () => {
        let saveBtnId = event.target.id.split(`-`)[2]
        const bookTitle = document.querySelector(`#edit-book-title-${saveBtnId}`).value
        const bookAuthor = document.querySelector(`#edit-book-author-${saveBtnId}`).value
        const bookISBN = document.querySelector(`#edit-book-isbn-${saveBtnId}`).value
        const editBookValues = {
            id: saveBtnId,
            title: bookTitle,
            author: bookAuthor,
            ISBN: bookISBN,
            userId: 1
        }
        console.log(editBookValues)
        fetchFunctions.saveEdit(editBookValues)
    }
};
// Exporting the event listener functions
export default eventListeners;
