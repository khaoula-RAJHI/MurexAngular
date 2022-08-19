import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ForgetpasswordService {
   private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  forgetpassword(email:string):Observable<Object>{
      console.log(email);
    return this.http.get<string>(`${this.apiServerUrl}/registration/forgetpassword/${email}`);
}


}
