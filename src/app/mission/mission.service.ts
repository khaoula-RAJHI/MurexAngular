import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from './mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8075/SpringMVC/mission';
  }

  public getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.clientUrl+"/retrieve-all-missions");
  }
  

  
    public save(mission: Mission) {
    return this.http.post<Mission>(this.clientUrl+"/add-mission", mission);
  }
 

  public modifyMission(mission:Mission):Observable<Mission> {
    return this.http.put<Mission>(this.clientUrl+"/modify-mission", mission);
  } 

  public deleteMission(idf_Mission: number): Observable<void> {
    return this.http.delete<void>(`${this.clientUrl+"/remove-mission"}/${idf_Mission}`);
  }
}

