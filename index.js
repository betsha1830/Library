let my_library = []
let count = 0
let display_count = 1
let content_count = 0

//  Storing fields as variables
const titleField = document.getElementById("title-field")
const authorField = document.getElementById("author-field")
const pagesField = document.getElementById("pages-field")
const readField = document.getElementById("read-field")
const addBtn = document.getElementById("add-btn")

// Storing divs as variables
const mainDiv = document.getElementById("books")

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
	}
}

//  An event to listen when a book is being submitted
addBtn.addEventListener("click", () => {
	addBookToMyLibrary()
	createBlock()
	displayBooks()
})

//  Adds a book object to my_library array
function addBookToMyLibrary() {
	let new_book = new Book(
		titleField.value,
		authorField.value,
		pagesField.value,
		readField.value
	)
	my_library.push(new_book)
	new_book = {}
}

function displayBooks() {
	for (let book_count = 0; book_count < my_library.length; book_count++) {
		if (display_count < my_library.length + 1) {
			document.querySelector(`#book-${display_count} #title`).innerText =
				my_library[book_count].title
			document.querySelector(`#book-${display_count} #author`).innerText =
				my_library[book_count].author
			document.querySelector(`#book-${display_count} #pages`).innerText =
				my_library[book_count].pages
			document.querySelector(`#book-${display_count} #read`).innerText =
				my_library[book_count].read
			display_count += 1
		}
	}
}

function createBlock() {
	for (let book_count = 0; book_count < my_library.length; book_count++) {
		if (count < my_library.length) {
			mainDiv.appendChild(
				document.createElement("div")
			).id = `book-${(count += 1)}`
			if (content_count < count) {
				let block = document.getElementById(`book-${count}`)
				block.appendChild(document.createElement("div")).id = "title"
				block.appendChild(document.createElement("div")).id = "author"
				block.appendChild(document.createElement("div")).id = "pages"
				block.appendChild(document.createElement("div")).id = "read"
				content_count++
			}
		}
	}
}
