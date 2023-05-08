let myLibrary = []

//  Storing fields as variables

const titleField = document.getElementById("title-field")
const authorField = document.getElementById("author-field")
const pagesField = document.getElementById("pages-field")
const readField = document.getElementById("read-field")
const addBtn = document.getElementById("add-btn")

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
	}
}

addBtn.addEventListener("click", () => {
	addBookToMyLibrary()
	console.log(myLibrary)
})

//  Adds a book object to myLibrary array
function addBookToMyLibrary() {
	let newBook = new Book(
		titleField.value,
		authorField.value,
		pagesField.value,
		readField.value
	)
	myLibrary.push(newBook)
	newBook = {}
}
