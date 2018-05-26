import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'bok-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books = BOOKS;
  selectedBook: Book;

  constructor() { }
  ngOnInit() { }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
