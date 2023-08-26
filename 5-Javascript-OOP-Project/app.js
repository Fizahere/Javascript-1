//Dom Selected Ui Variables
const titleInputField = document.querySelector("#title");
const authorInputField = document.querySelector("#author");
const isbnInputField = document.querySelector("#isbn");
const bookFormElement = document.querySelector("#book-form");
const selectTbodyBookList = document.getElementById("book-list");
const containerDiv = document.querySelector(".container");

//Oop Related Work
function UI() {}
UI.prototype.addBook = function (objectForBook) {
  // <tr>
  //       <td>muzammil</td>
  //       <td>muzammil</td>
  //       <td>muzammil</td>
  //       <td><a href="#" class="delete">X<a></td>
  //     </tr>

  const tableRow = document.createElement("tr");
  tableRow.innerHTML = ` <td>${objectForBook.title}</td>
           <td>${objectForBook.author}</td>
           <td>${objectForBook.isbn}</td>
           <td><a href="#" class="delete">X<a></td>`;

  selectTbodyBookList.appendChild(tableRow);
};

UI.prototype.resetFields = function () {
  titleInputField.value = "";
  authorInputField.value = "";
  isbnInputField.value = "";
};

UI.prototype.showAlert = function (message = "", className = "success") {
  const createDiv = document.createElement("div");
  createDiv.className = `alert ${className}`;
  createDiv.innerText = message;

  //container div k andar bookform se phle creatediv ko insert kardien
  containerDiv.insertBefore(createDiv, bookFormElement);

  setTimeout(function () {
    createDiv.remove();
  }, 2000);
};

function createObjectForBook(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//Bind Event Listeners
bookFormElement.addEventListener("submit", bookFormSubmitHandler);

function bookFormSubmitHandler(event) {
  event.preventDefault();
  const titleValue = titleInputField.value;
  const authorValue = authorInputField.value;
  const isbnInputValue = isbnInputField.value;

  //   console.log({ titleValue, authorValue, isbnInputValue });

  const ui = new UI();
  //   const objectForBook = {
  //     title: titleValue,
  //     author: authorValue,
  //     isbn: isbnInputValue,
  //   };

  if (!titleValue) {
    ui.showAlert("title is empty", "error");
    return;
  }
  if (!authorValue) {
    ui.showAlert("author is empty", "error");
    return;
  }
  if (!isbnInputValue) {
    ui.showAlert("isbn is empty", "error");
    return;
  }

  const objectForBook = new createObjectForBook(
    titleValue,
    authorValue,
    isbnInputValue
  );

  // console.log(objectForBook, "objectForBook");
  //   debugger;
  ui.addBook(objectForBook);
  ui.resetFields();
  ui.showAlert("book is added successfully!!");
}

//event bubling
//it will bind the event listner in all children elements
selectTbodyBookList.addEventListener("click", allTbodyClickHandler);

function allTbodyClickHandler(event) {
  // event.preventDefault();

  //it will prevent the event bubling functionality
  // event.stopPropagation();

  const curentElement = event.target;
  // console.log(curentElement, "curentElement");

  if (curentElement.className === "delete") {
    const exactTableRow = curentElement.parentElement.parentElement;

    if (confirm("Are you sure")) {
      exactTableRow.remove();
      const ui = new UI();
      ui.showAlert("book is removed successfully!", "error");
    }
  }
}
