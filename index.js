import {
  btnAdd,
  container,
  allLinks,
  year,
} from './modules/constants.js';

import Book from './modules/class.js';

import {
  addToList,
  addremoveList,
} from './modules/Library.js';

import click from './modules/nav.js';

import {
  DateTime,
} from './modules/luxon.js';

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
});

const now = DateTime.now();

year.textContent = now;