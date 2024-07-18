import { Component} from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormsModule, NgForm } from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { LoginInfo } from '../model/loginInfo.model';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService){}

  onSubmit(ngForm : NgForm){
    const loginInfo : LoginInfo = {
      email : ngForm.value.email,
      password: ngForm.value.password,
    }
    this.loginService.login(loginInfo).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userEmail', ngForm.value.email);
        this.router.navigate(['']);
      },
      error: err => {
        console.log(err); 
        alert('Errore durante il login');
      },
    });
  }
}




