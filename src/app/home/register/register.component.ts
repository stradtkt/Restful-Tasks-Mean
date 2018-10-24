import { Router } from '@angular/router';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();
  registrationErrors: string[] = [];
  constructor(private auth: AuthService,
    private router: Router) { }
  onSubmit(event: Event, user: User, form: NgForm) {
    this.auth.register(user)
      .subscribe(() => {
        this.router.navigateByUrl('/tasks');
      });
  }

}
