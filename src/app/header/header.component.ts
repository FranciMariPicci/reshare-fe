import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    console.log(this.isLoggedIn$);
  }

  onLogout(){
    this.loginService.logout();
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    console.log(this.isLoggedIn$);
  }

}
