import { ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { RegisterService } from '../services/register.service';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { RegisterInfo } from '../model/register-info.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import { merge } from 'rxjs';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');

  constructor(private registerService: RegisterService, private router: Router) { 
    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Email non valida');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }


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
