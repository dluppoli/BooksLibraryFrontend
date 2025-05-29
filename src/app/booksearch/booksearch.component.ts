import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booksearch',
  imports: [FormsModule,CommonModule],
  templateUrl: './booksearch.component.html',
  styleUrl: './booksearch.component.css'
})
export class BooksearchComponent {
  isbn:string=""
  risultati : Book[] = [];

  constructor(private bookService:BookService, private router:Router)  {}

  search()
  {
    //if(this.isbn!="")
      /*this.bookService.searchOnGoogle(this.isbn).subscribe({
        next: (r:any) => {
          let items= r.items;
          if( items!==undefined)
          {  
            for(let item of items)
            {
              let libro:Book = {
                id:0,
                isbn:this.isbn,
                title:item.volumeInfo.title,
                authors:item.volumeInfo.authors,
                description:item.volumeInfo.description,
                categories:item.volumeInfo.categories,
                image:item.volumeInfo.imageLinks.thumbnail,
                stars:0,
                readingState:'Da Leggere'
              }
              this.risultati.push(libro)
            }
          }
        },
        error: r=> this.risultati = []
    })*/

    this.bookService.searchOnGoogle(this.isbn).subscribe({
        next: r => this.risultati=r,
        error: r=> this.risultati = []
    })
  
  }

  add(libro:Book)
  {
    this.bookService.add(libro).subscribe(r => this.router.navigate(['libri',r.id]))
  }
}
