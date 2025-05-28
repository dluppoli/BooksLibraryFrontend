import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(filtroAutore:string,filtroCategoria:string):Observable<Book[]>
  {
    var url = environment.apiUrl+'/libri';

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
    return this.http.get<Book>(environment.apiUrl+'/libri/'+id)
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
    return this.http.get<string[]>(environment.apiUrl+'/autori')
  }

  getCategories():Observable<string[]>
  {
    return this.http.get<string[]>(environment.apiUrl+'/generi')
  }
}
