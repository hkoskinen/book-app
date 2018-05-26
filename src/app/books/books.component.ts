import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'bok-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  book: Book = {
    id: 1,
    title: 'The Obstacle Is The Way',
    author: 'Ryan Holiday',
  };

  constructor() { }

  ngOnInit() {
  }

}
