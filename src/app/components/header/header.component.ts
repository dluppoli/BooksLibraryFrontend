import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService:AuthService, private router:Router){}

  logout()
  {
    this.authService.logout().subscribe(r=> 
      this.router.navigate(['login'])
    )
  }

  get username()
  {
    return this.authService.getNameFromToken();
  }
}
