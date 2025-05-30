import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService:AuthService, private router:Router) { 

    if( authService.isLogged() ) router.navigate(['/'])

  }
  
  login(){
    this.authService.login(this.username, this.password).subscribe({
      next: r => {
        this.router.navigate(['/']);
        this.error = '';
      },
      error: e => {
        this.error = "Credenziali non valide. Riprova.";
      }
    });
  }
}
