import {
    btnAdd,
    container,
    allLinks,
    year
} from "./modules/constants";

import Book from "./modules/class";

import {
    addToList,
    addremoveList
} from "./modules/Library";

import click from "./modules/nav";

import {
    DateTime
} from "./modules/luxon";

const storeBook = new Book();

storeBook.loadBooks();

container.addEventListener('click', (e) => {
    addremoveList(e);
});

btnAdd.addEventListener('click', (e) => {
    addToList(e);
});

allLinks.addEventListener('click', (e) => {
    click(e);
})

const now = DateTime.now()

year.textContent = now;