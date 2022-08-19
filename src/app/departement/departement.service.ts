import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Departement } from './departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private departementUrl: string;

  constructor(private http: HttpClient) {
    this.departementUrl = 'http://localhost:8091/departement';
  }

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  public getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(this.departementUrl+"/retrieve-all-departements", this.options);
  }
  

  
    public save(departement: Departement) {
    return this.http.post<Departement>(this.departementUrl+"/add-departement", departement, this.options);
  }
 

  public modifyDepartement(departement:Departement):Observable<Departement> {
    return this.http.put<Departement>(this.departementUrl+"/modify-departement", departement, this.options);
  } 

  public deletDepartement(idf_Departement: number): Observable<void> {
    return this.http.delete<void>(`${this.departementUrl+"/remove-departement"}/${idf_Departement}`, this.options);
  }
}

