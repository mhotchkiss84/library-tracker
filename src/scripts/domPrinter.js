// When the user enters information into the fields and clicks a "Save" button, the new book should be saved to the database.

// Creating a object to store the dom printer functions
const domPrinter = {
    //Creating a function to print the form to the DOM
    printForm: () =>{
        document.querySelector(`#form-container`).innerHTML = `
        <h3>Submit a new book</h3>
        <form id="create-entry">
        <label for="title">Title</>
        <input type="text" id="book-title">
        <label for="author">Author</>
        <input type="text" id="book-author">
        <label for="isbn">ISBN Number</>
        <input type="text" id="book-isbn">
        </form>
        <button id="submit-btn">Submit</button>
        `
    }
}
// Exporting the domPrinter functions
export default domPrinter