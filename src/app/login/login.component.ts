import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  form: any = {};

  user:User = new User();
  constructor(private service: LoginService, private route: Router) { }
   
  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
   // alert("you are not allowed")
    this.route.navigateByUrl('/menu');
  }

  
  onSubmit() {
    this.service.login(this.form).subscribe(
      (data) => {
        alert("welcome")
       // alert("Data"+JSON.stringify(data))
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('email', data.user);
    this.route.navigateByUrl('/menu');

      },
      (err) => {
        alert("err"+JSON.stringify(err))

      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

 

 
  onLogout() {
    localStorage.removeItem('token');  
    this.route.navigate(['/login']);
  }


}
