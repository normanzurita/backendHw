class Title {

    constructor(name) {
        this.name = name;
    }

    static origin() {
        console.log("This material is property of CIC library")
    }
    borrow(userId, returnDate) {
        console.log(this.name + " is being borrowed by User: " + userId + " to be returned by " + returnDate);
    }


}

class Magazine extends Title {
    constructor(name, issue) {
        super(name);
        this.issue = issue;
    }

    howOld(issue) {
        // Parse the input date string
        const [month, year] = issue.split(' ');
        const inputDate = new Date(`${month} 1, ${year}`);

        // Get current date
        const currentDate = new Date();

        // Calculate the difference in months
        let months = (currentDate.getFullYear() - inputDate.getFullYear()) * 12;

        console.log("this issue is " + months + " old");
    }
}

class Book extends Title {
    constructor(name, author) {
        super(name);
        this.author = author;
    }
    read() {
        console.log(`reading ${this.name}`);
    }

}

class Movie extends Title {
    #classification;

    constructor(name, year) {
        super(name);
        this.year = year;
    }

    play() {
        console.log(`${this.name} is playing... `);
    }
    setClassification(classification) {
        this.#classification = classification;
    }
    getClassification() {
        return this.#classification;
    }

}

class Library {
    bd = {
        titles: {},
    }
    constructor() {
    }

    createEntry(id, title){
        this.bd.titles[id] = title;
    }
    readEntry(id){
        return this.bd.titles[id];
    }
    updateEntry(id, title) {
        return this.bd.titles[id] = title;
    }
    deleteEntry(id) {
        delete this.bd.titles[id]
    }
}

const magazine = new Magazine("National Geographic", "June 2023");
const book = new Book("1984", "George Orwell");
const movie = new Movie("Inception", 2010);

console.log(magazine);  // Magazine { name: 'National Geographic', issue: 'June 2023' }
console.log(book);      // Book { name: '1984', author: 'George Orwell' }
console.log(movie);     // Movie { name: 'Inception', year: 2010 }

book.borrow("1829", "June 23");
magazine.howOld("June 2023");
movie.play();
book.read();
Magazine.origin();
movie.setClassification("PG-13");
console.log(movie.getClassification());

const library = new Library();

// Create
library.createEntry("8977", book);
library.createEntry("8978", magazine);
library.createEntry("8979", movie);

// Read
const entry = library.readEntry("8977");
console.log(entry)

// Update
library.updateEntry("8979", magazine);

// Delete
library.deleteEntry("8978");

console.log("fi");