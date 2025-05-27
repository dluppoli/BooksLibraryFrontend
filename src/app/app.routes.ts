import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'libri/:id', component:BookdetailComponent},
    { path:'**', component:NotfoundComponent}
];