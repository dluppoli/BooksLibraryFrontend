import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  private library:Book[] = [
    { 
      id:1, isbn:'123456',title:'Blue Tango',authors:['Paolo Roversi'],
      categories:['Giallo'],image:'http://books.google.com/books/content?id=PJFEDwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
      description: 'lorem ipsum', stars:0, readingState:'Da Leggere'
    },
    { 
      id:2, isbn:'78901234',title:'Eruption',authors:['James Patterson','Michael Crichton'],
      categories:['Azione'],image:'http://books.google.com/books/content?id=o9AKEQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
      description: 'lorem ipsum', stars:0, readingState:'Da Leggere'
    }
  ]

  getAll():Book[]
  {
    return this.library;
  }

  getOne(id:number):Book | undefined
  {
    return this.library.find(b => b.id == id)
  }

  delete(id:number)
  {

  }

  add(l:Book)
  {

  }

  update(l:Book)
  {

  }
}
