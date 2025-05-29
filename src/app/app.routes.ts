import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BooksearchComponent } from './components/booksearch/booksearch.component';

export const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'libri/cerca', component:BooksearchComponent},
    { path:'libri/:id', component:BookdetailComponent},
    { path:'**', component:NotfoundComponent}
];