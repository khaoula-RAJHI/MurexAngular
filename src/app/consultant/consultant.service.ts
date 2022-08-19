import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultant } from './consultant';

@Injectable({providedIn: 'any'})
export class ConsultantService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };
  
  public getConsultant(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(`${this.apiServerUrl}/Consultant/retrieve-all-Consultant`, this.options);
  }

  public updateConsultant(Consultant: Consultant): Observable<Consultant> {
    return this.http.put<Consultant>(`${this.apiServerUrl}/Consultant/modify-Consultant`, Consultant, this.options );
  }

  public addConsultant(Consultant: Consultant): Observable<Consultant> {
    return this.http.post<Consultant>(`${this.apiServerUrl}/Consultant/add-Consultant`, Consultant, this.options );
  }

  public deleteConsultant(numConsultant: string | undefined = ''): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Consultant/remove-Consultant/${numConsultant}`, this.options);
  }
}
