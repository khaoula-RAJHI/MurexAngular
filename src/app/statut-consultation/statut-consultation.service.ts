import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StatutConsultation } from './statut-consultation';


@Injectable({
  providedIn: 'root'
})
export class StatutConsultationService {

  private statutConsultationtUrl: string;

  constructor(private http: HttpClient) {
    this.statutConsultationtUrl = 'http://localhost:8075/SpringMVC/statutConsultation';
  }

  public getStatutConsultations(): Observable<StatutConsultation[]> {
    return this.http.get<StatutConsultation[]>(this.statutConsultationtUrl+"/retrieve-all-statutConsultations");
  }
   

  
    public save(statutConsultation: StatutConsultation) {
    return this.http.post<StatutConsultation>(this.statutConsultationtUrl+"/add-statutConsultation", statutConsultation);
  }
 

  public modifyStatutConsultation(statutConsultation: StatutConsultation): Observable<StatutConsultation> {
    return this.http.put<StatutConsultation> (this.statutConsultationtUrl+"/modify-statutConsultation", statutConsultation);
  }

  public deleteStatutConsultation(IDF_StatutConsultaion: number): Observable<void> {
    return this.http.delete<void>(`${this.statutConsultationtUrl+"/remove-statutConsultation"}/${IDF_StatutConsultaion}`);
  }
}
