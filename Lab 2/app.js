class Title {
    #title;

    constructor(title) {
        this.#title = title;
    }

    getTitle() {
        return this.#title;
    }
    updateTitle(title) {
        this.#title = title;
    }

    static copyright() {
        console.log("This material belong to the CIC Library")
    }
}

class Book extends Title {
    #author;

    constructor(title, author) {
        super(title);
        this.#author = author;
    }

    getAuthor() {
        return this.#author;
    }
    updateAuthor(author) {
        this.#author = author;
    }
    toJSON(){
        return {title: this.getTitle(), author: this.getAuthor()};
    }
}

class Magazine extends Title {
    #issue;

    constructor(title, issue) {
        super(title);
        this.#issue = issue;
    }
    getIssue() {
        return this.#issue;
    }
    updateIssue(issue) {
        this.#issue = issue;
    }
    toJSON(){
        return {title: this.getTitle(), issue: this.getIssue()};
    }
}

class Movie extends Title {
    #year;

    constructor(title, year) {
        super(title);
        this.#year = year;
    }
    getYear() {
        return this.#year;
    }
    updateYear(year) {
        this.#year = year;
    }
    toJSON(){
        return {title: this.getTitle(), year: this.#year};
    }
}


const book = new Book("1984", "George Orwell");
const magazine = new Magazine("National Geographic", "June 2023");
const movie = new Movie("Inception", 2010);


class Library {
    db;

    constructor() {
        this.db = {}
    }
    constructor(filename) {
        this.db = JSON.parse()
    }

    createEntry(id, title) {
        this.db[id] = title.toJSON();
    }

    readEntry(id) {
        return this.db[id];
    }

    updateEntry(id, name) {
        const s  = JSON.stringify(this.db[id]);
        let ob = JSON.parse(s);
        ob.title = name;
        this.db[id] = ob;
    }

    deleteEntry(id) {
        delete this.db[id];
    }



}

const library = new Library();
library.createEntry(5677, book);
library.createEntry(5678, magazine);
library.createEntry(5679, movie);

console.log(library.readEntry(5678));
library.updateEntry(5679, "sherk");
library.deleteEntry(5677);


const fs = require('fs');

fs.writeFile("db.json",JSON.stringify(library.db,null, 2), (error) => {
    if (error) throw error;
});