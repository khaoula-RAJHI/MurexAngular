import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from './forgetpassword.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  formModel = {
    email: ''
  } 
  constructor(private service: ForgetpasswordService,private formBuilder: FormBuilder,private http:HttpClient,private route:Router) { }


  ngOnInit():void {
  }


  submit(form: NgForm){
    console.log(form.value)  
    this.service.forgetpassword(form.value.email).subscribe(
      (res: any) => {
        alert("Please check your email");      
      },error=>{
        alert( console.log(error))
        
      
      }
      );
  }

  
      
}
