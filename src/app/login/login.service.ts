import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn: 'root'})

export class LoginService {
   private apiServerUrl= environment.apiBaseUrl;


 
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  formModel = this.fb.group({

   Email: ['', Validators.email],
   Passwords: this.fb.group({
     Password: ['', [Validators.required, Validators.minLength(4)]]
   }),
  
   
 });

 login(form: any) : Observable<any>{
    let  options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    const data =  new HttpParams().set('email',form.email).set('password',form.password)

     return this.http.post(`${this.apiServerUrl}/login`,data, options);
  }

  public getUsersByEmail(email: string): Observable<User[]> {
    console.log(email);
    return this.http.get<User[]>(`${this.apiServerUrl}/user/findByEmail/${email}`,httpOptions);
  }
  
  
  
}