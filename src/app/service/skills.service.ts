import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {URL = 'https://backend-production-7129.up.railway.app/hyskills/';

constructor(private httpClient: HttpClient) { }

public lista(): Observable<Skills[]>{
  return this.httpClient.get<Skills[]>(this.URL+'lista');
}
public detail(id:  number): Observable<Skills>{
  return this.httpClient.get<Skills>(this.URL + `detail/${id}`);
}
public save(Skills:Skills): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'create', Skills);
}
public update(id: number, Skills: Skills): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, Skills);
}
public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}
}