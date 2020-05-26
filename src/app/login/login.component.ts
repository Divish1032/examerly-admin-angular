import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public username: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) { }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => {
          this.toastr.success('Success', 'Login Succesful');
          this.router.navigate(['/course'])
        },
        err => {
          console.log(err);
          this.toastr.error('Error', 'Wrong Credentials');
        }
      );
  }
}
