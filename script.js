var myLibrary = [];
const mainContainer = document.querySelector(".main-container");


function Book(name, author, page, read) {
    this.title = name;
    this.author = author;
    this.page = page;
    this.read = read;
    return this;
}

function addBookToLibrary(book, library) {
    library.push(book);
    return library;
}

function addToDOM(library) {
    if (mainContainer.lastElementChild) {
        while (mainContainer.lastElementChild) {
            mainContainer.removeChild(mainContainer.lastElementChild);
        }
    }
    library.forEach(inBook => {
        const div = document.createElement('div');
        div.classList.add('bookcard');
        div.setAttribute('id', inBook["title"]);
        for (const key in inBook) {
            console.log(div.getAttribute('id'));
            var content = ""; 
            if (key !== "read") {
                content = document.createElement('p');
                content.textContent = `${key} : ${inBook[key]}`;
            } else if(key === "read"){
                content = document.createElement('button');
                content.classList.add('read-button');
                switch(inBook[key]) {
                    case true:
                        content.style.cssText = "background-color: #80ed99;";
                        content.textContent = "Read";
                        div.style.cssText = "border: 1px solid #80ed99";
                        break;

                    case false:
                        content.style.cssText = "background-color: #EA526F;"
                        content.textContent = "Not read";
                        div.style.cssText = "border: 1px solid #EA526F";
                        break;
                }
            }
            div.appendChild(content);
        }
        const deleteButton = document.createElement('button');
            deleteButton.classList.add('remove-button');
            deleteButton.textContent = "Remove";
            deleteButton.addEventListener('click', () => {
                mainContainer.removeChild(mainContainer.child);
            })
        div.appendChild(deleteButton);
        mainContainer.appendChild(div);
    });
}


const addBookFormContainer = document.querySelector(".add-book-form-container");
const addBookButton = document.querySelector("#addBook");
const cancelButton = document.querySelector("#cancel-button");
const submitButton = document.querySelector("#submit-button");





addBookButton.addEventListener('click', () => {
    addBookFormContainer.style.cssText = "visibility: visible";
});

cancelButton.addEventListener('click', () => {
    addBookFormContainer.style.cssText = "visibility: hidden";
});


submitButton.addEventListener('click', () => {
    const bookName = document.querySelector("#book_name").value;
    const bookAuthor = document.querySelector("#book_author").value;
    const bookPage = document.querySelector("#book_page").value;
    var bookRead = document.querySelector("#already_read").checked;
    console.log(bookRead);
    switch(bookRead) {
        case "on":
            bookRead = true;
            break;
        case "off":
            bookRead = false;
    }
    if (bookName && bookAuthor && bookPage) {
        var newBook = new Book(bookName, bookAuthor, bookPage, bookRead);
        myLibrary = addBookToLibrary(newBook, myLibrary);
        addBookFormContainer.style.cssText = "visibility: hidden";
        addToDOM(myLibrary);
    }
})





