const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id: 1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id: 2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg',
        },
        {
            id: 3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id: 4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg',
        },
        {
            id: 5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg',
        },
        {
            id: 6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg',
        },
    ],
};

// Selecting the title element and update its text content
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

// Selecting the book list container
const bookList = document.getElementById('book-list');

// Removing the example li element
const exampleLi = document.getElementById('delete-this');
bookList.removeChild(exampleLi);

// Looping through every book in the bookStore
bookStore.books.forEach((book) => {
    // Creating elements for each book
    const bookContainer = document.createElement('li');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookImage = document.createElement('img');

    // Setting the content for each element
    bookTitle.textContent = book.title;
    bookAuthor.textContent = `by ${book.author}`;
    bookImage.src = book.imageUrl;
    bookImage.alt = `Cover of ${book.title}`;

    // Appending elements to the book container
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Appending the book container to the book list
    bookList.appendChild(bookContainer);
});
