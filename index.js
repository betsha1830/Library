let my_library = []
let count = 0
let display_count = 0
let content_count = 0

//  Storing fields as variables
const titleField = document.getElementById("title-field")
const authorField = document.getElementById("author-field")
const pagesField = document.getElementById("pages-field")
const readField = document.getElementById("read-field")
const addBtn = document.getElementById("add-btn")

// Storing divs as variables
const mainDiv = document.getElementById("books")
const backdrop = document.getElementById("backdrop")

const add_book_btn = document.getElementById("add-book-btn")

//	Changes the visiblity of the add book form
add_book_btn.addEventListener("click", () => {
	backdrop.style.visibility = "visible"
})

backdrop.addEventListener("click", () => {
	backdrop.style.visibility = "hidden"
})

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
	clear_field()
	createBlock()
	displayBooks()
	backdrop.style.visibility = "hidden"
})

//	Clear input fields
function clear_field() {
	titleField.value = ""
	authorField.value = ""
	pagesField.value = ""
	readField.value = ""
}

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

//	Displays the book data that has been stored
function displayBooks() {
	for (let book_count = 0; book_count < my_library.length; book_count++) {
		document.querySelector(
			`#title-${book_count + 1}`
		).innerText = `Title: ${my_library[book_count].title}`
		document.querySelector(
			`#author-${book_count + 1}`
		).innerText = `Author: ${my_library[book_count].author}`
		document.querySelector(
			`#pages-${book_count + 1}`
		).innerText = `Pages: ${my_library[book_count].pages}`
		document.querySelector(
			`#read-${book_count + 1}`
		).innerText = `Read: ${my_library[book_count].read}`
	}
}

//	Creates a block for the books to separtely render
function createBlock() {
	for (let book_count = 0; book_count < my_library.length; book_count++) {
		if (count < my_library.length) {
			mainDiv.appendChild(
				document.createElement("div")
			).id = `book-${(count += 1)}`
			if (content_count < count) {
				let block = document.getElementById(`book-${count}`)
				block.appendChild(
					document.createElement("div")
				).id = `remove-edit-${count}`
				block.appendChild(document.createElement("div")).id = `title-${count}`
				block.appendChild(document.createElement("div")).id = `author-${count}`
				block.appendChild(document.createElement("div")).id = `pages-${count}`
				block.appendChild(document.createElement("div")).id = `read-${count}`
				document.querySelector(
					`#book-${count} #remove-edit-${count}`
				).innerHTML = `<img src='./src/images/trash.png' /> <button class='${count}' id='read-status'>Change read status</ button>`
				content_count++
				block.className = "card"
			}
		}
	}
}

//	An event listener to change the read status
function change_read_status() {
	let book_num
	document.addEventListener("click", (e) => {
		if (e.target.id === "read-status") {
			book_num = e.target.className
		}
	})
	console.log(book_num)
}
