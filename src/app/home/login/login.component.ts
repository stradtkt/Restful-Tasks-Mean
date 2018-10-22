import { Router } from '@angular/router';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  loginErrors: string[] = [];
  constructor(private auth: AuthService,
    private router: Router) { }
  onSubmit(user: User) {
    this.auth.login(user)
      .subscribe(() => {
        this.router.navigateByUrl('/tasks');
      });
  }

}
