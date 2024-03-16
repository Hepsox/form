import { Component } from '@angular/core';
import { Users } from '../../models/users.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  newUser: Users = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  onSubmit(): void {
    console.log(this.newUser);
  }
}
