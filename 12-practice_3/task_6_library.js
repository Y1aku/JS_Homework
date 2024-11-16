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
        this.id = id; // Уникальный идентификатор книги
        this.title = title; // Название книги
        this.author = author; // Автор книги
        this.genre = genre; // Жанр книги
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
        this.books = []; // Массив для хранения всех книг в библиотеке
    }
};

const book1 = new Book(1, "1984", "George Orwell", "Dystopian");
console.log(book1);
console.log(book1.getDetails());
// const library1 = new Library('Big Library', 'st. Leronto');
// console.log(library1);
// library1.books.push(book1);
// console.log(library1);
