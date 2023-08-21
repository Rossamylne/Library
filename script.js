var myLibrary = [];
const mainContainer = document.querySelector(".main-container");


function Book(name, author, page, read) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
    return this;
}

function addBookToLibrary(book, library) {
    library.push(book);
    return library;
}


var myBook = new Book("caca", "pipi", 12, false);
myLibrary = addBookToLibrary(myBook, myLibrary);

var secondBook = new Book("aezer", "vbvbvcb", 19, true);
myLibrary = addBookToLibrary(secondBook, myLibrary);


if (myLibrary) {
    myLibrary.forEach(inBook => {
        const div = document.createElement('div');
        div.classList.add('bookcard');
        console.log(inBook);
        for (const key in inBook) {
            var content = ""; 
            if (key !== "read") {
                content = document.createElement('p');
                content.textContent = `${key} : ${inBook[key]}`;
                console.log(`${key} : ${inBook[key]}`);
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
        mainContainer.appendChild(div);
    });
}