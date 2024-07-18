import { Component} from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormsModule, NgForm } from "@angular/forms";
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { RegisterInfo } from '../model/register-info.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  constructor(private registerService: RegisterService, private router: Router) { }

  onSubmit(ngForm : NgForm){
    const currentUser : User = {
      firstname: ngForm.value.firstname,
      lastname: ngForm.value.lastname,
      email: ngForm.value.email,
      phone: ngForm.value.phone,
      cityName: ngForm.value.city,
      gender: ngForm.value.gender,
      birthdate: ngForm.value.birthdate,
      description: ngForm.value.description
    };
    const registerInfo : RegisterInfo = {
      user : currentUser,
      password : ngForm.value.password
    }

    this.registerService.saveUser(registerInfo).subscribe({
      next: (resp)=>this.router.navigate(['/login']),
      error: (er)=>console.log(er)
    });
  }
}
