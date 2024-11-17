/*
Необходимо создать систему управления библиотекой с использованием классов. 
Используйте все знания, которые вы приобрели о классах, 
в том числе про приватные/публичные методы и поля.

Описание задания:
Ваша задача — реализовать две основные сущности: Библиотека и Книга. 
В рамках этого задания вам нужно создать классы, которые позволят управлять книгами 
в библиотеке. 
Библиотека должна иметь возможность добавлять новые книги, получать информацию 
о книгах по различным параметрам, 
удалять книги и выводить список всех книг.
*/

class Book {
    constructor(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
    };

    getDetails() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            genre: this.genre
        };
    };
};

class Library {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.books = [];
    };

    addBook(book) {
        this.books.push(book);
    };

    getAllBooks() {
        return this.books;
    };

    getBookByTitle(title) {
        return this.books.find(book => book.title === title);
    };

    getBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    };

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    };
};

const library1 = new Library('Big Library', 'st. Leronto');

const book1 = new Book(1, "1984", "George Orwell", "Dystopian");
const book2 = new Book(2, "Animal Farm", "George Orwell", "Political Satire");
library1.addBook(book1);
library1.addBook(book2);
// console.log(library1.getBookByTitle("1984"));
// console.log(library1.getBooksByAuthor("George Orwell"));
console.log(library1.getBooksByGenre("Dystopian"));
