import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  private library:Book[] = [
    { 
      id:1, isbn:'123456',title:'Blue Tango',authors:['Paolo Roversi'],
      categories:['Giallo'],image:'http://books.google.com/books/content?id=PJFEDwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
      description: 'lorem ipsum', stars:0, readingState:'Da Leggere'
    },
    { 
      id:2, isbn:'78901234',title:'Eruption',authors:['James Patterson','Michael Crichton'],
      categories:['Azione'],image:'http://books.google.com/books/content?id=o9AKEQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
      description: 'lorem ipsum', stars:3, readingState:'Da Leggere'
    }
  ]

  getAll(filtroAutore:string,filtroCategoria:string):Observable<Book[]>
  {
    var url = 'https://bookslibrary-782617619332.europe-west1.run.app/libri'

    let filtri = "";
    if( filtroAutore!="-" && filtroAutore!="") filtri += `author=${filtroAutore}`

    if( filtroCategoria!="-" && filtroCategoria!="")
    { 
      if( filtri!="") filtri+="&"
      filtri += `category=${filtroCategoria}`
    }

    if( filtri!="") url += "?" + filtri;

    return this.http.get<Book[]>(url)
  }

  getOne(id:number):Observable<Book>
  {
    return this.http.get<Book>('https://bookslibrary-782617619332.europe-west1.run.app/libri/'+id)
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

  getAuthors():Observable<string[]>
  {
    return this.http.get<string[]>('https://bookslibrary-782617619332.europe-west1.run.app/autori')
  }

  getCategories():Observable<string[]>
  {
    return this.http.get<string[]>('https://bookslibrary-782617619332.europe-west1.run.app/generi')
  }
}
