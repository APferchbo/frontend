import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/persona/';
  URL = 'https://apferchbo.rj.r.appspot.com/persona/';

  constructor(private httpClient: HttpClient) { }

public lista(): Observable<persona[]>{
  return this.httpClient.get<persona[]>(this.URL+'lista');
}
public detail(id:  number): Observable<persona>{
  return this.httpClient.get<persona>(this.URL + `detail/${id}`);
}
/*public save(Persona:persona): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'create', Persona);
}*/
public update(id: number, Persona: persona): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
}
/*public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}*/
}
