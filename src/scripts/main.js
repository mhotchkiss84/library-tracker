// Importing the domPrinter functions
import domPrinter from './domPrinter.js';
// Importing the event listener functions
import eventListeners from './eventListeners.js';
// Calling domPrinter printForm to load the form on the page
domPrinter.printForm();
domPrinter.printBooks();
// .then()

document.querySelector(`#submit-btn`).addEventListener('click', (submitEvent) => {
    eventListeners.submitBookEvent()
});

document.body.addEventListener("click", bodyEvent =>{
    if(event.target.id.includes(`delete`)){
        eventListeners.deleteBookEvent()
    } else if(event.target.id.includes(`edit`)){
        eventListeners.editBookEvent()
    } else if(event.target.id.includes(`save`)){
        eventListeners.saveBookEvent()
    }
})

// ToDo: Make function that detects if form is blank and puts an error instead of submitting to the JSON database
// Clean up edit book function and use another function inside it