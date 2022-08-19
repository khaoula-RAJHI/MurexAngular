import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StatutConsultation } from './statut-consultation';


@Injectable({
  providedIn: 'root'
})
export class StatutConsultationService {

  private statutConsultationtUrl: string;

  constructor(private http: HttpClient) {
    this.statutConsultationtUrl = 'http://localhost:8091/statutConsultation';
  }

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  };

  public getStatutConsultations(): Observable<StatutConsultation[]> {
    return this.http.get<StatutConsultation[]>(this.statutConsultationtUrl+"/retrieve-all-statutConsultations", this.options);
  }
   

  
    public save(statutConsultation: StatutConsultation) {
    return this.http.post<StatutConsultation>(this.statutConsultationtUrl+"/add-statutConsultation", statutConsultation, this.options);
  }
 

  public modifyStatutConsultation(statutConsultation: StatutConsultation): Observable<StatutConsultation> {
    return this.http.put<StatutConsultation> (this.statutConsultationtUrl+"/modify-statutConsultation", statutConsultation, this.options);
  }

  public deleteStatutConsultation(IDF_StatutConsultaion: number): Observable<void> {
    return this.http.delete<void>(`${this.statutConsultationtUrl+"/remove-statutConsultation"}/${IDF_StatutConsultaion}`, this.options);
  }
}
