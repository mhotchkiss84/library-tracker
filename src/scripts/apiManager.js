// Creating a function for building an HTML string
function buildHTMLString(element) {
	let htmlString = `<div id="book-${element.id}"<h2>${element.title}</h2>
    <p>Author: ${element.author}</p>
    <p>ISBN: ${element.ISBN}</p>
    <button id="delete-btn-${element.id}">Delete</button>
    <button id="edit-btn-${element.id}">Edit</button>
    </div>
    `;
	return htmlString;
}
// Creaint a function to clear the screen
function clearScreen() {
	document.querySelector(`#book-container`).innerHTML = ``;
}
// Creating an object to store the fetch functions
const fetchFunctions = {
	fetchBooks: () => {
		fetch(`http://localhost:8088/books`).then((books) => books.json()).then((parsedBooks) => {
			parsedBooks.forEach((element) => {
				document.querySelector(`#book-container`).innerHTML += buildHTMLString(element);
			});
		});
	},
	submitNewBook: (bookInfo) => {
		fetch('http://localhost:8088/books', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(bookInfo)
		}).then(() => {
			clearScreen();
			fetchFunctions.fetchBooks();
		});
	},
	deleteBook: (entryID) => {
		fetch(`http://localhost:8088/books/${entryID}`, {
			method: 'DELETE'
		}).then(() => {
			clearScreen();
			fetchFunctions.fetchBooks();
		});
	},
	singleBook: (entryID) => {
        return fetch(`http://localhost:8088/books/${entryID}`).then((book) => book.json()).then((parsedBook) => {
		return parsedBook
		});
	}
};
export default fetchFunctions;
