import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetService } from './reset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  email!: string;
  token!: string;
  constructor(private service: ResetService, private router: Router, private route: ActivatedRoute,
    ) { 
    this.route.queryParams.subscribe(params => {this.token=params['token'], this.email=params['email']});

  }
    formModel = {
      email: this.email,
      password: ''
    }  
  ngOnInit(): void {
   this.formModel.email=this.email;
  }

  onSubmit(form: NgForm) {
    console.log( this.token);
    console.log( this.email);

    this.service.resetpassword( this.token, this.email,form.value.password).subscribe(
      (res: any) => {
        console.log(res)
        alert("Password Changed Successfully ")
        this.router.navigateByUrl('/home');  
      }
      ,error=>{
        alert("Something is wrong")
        alert( console.log(error))
        
        this.router.navigate(['/login']);
      }
      
      );
      
    }
  }
