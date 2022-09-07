import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import { Prop } from 'src/app/_models/prop';

@Injectable({
  providedIn: 'root'
})
export class PropService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  backendUrlBase: string = 'http://192.168.123.115:8080/api/v1'

  constructor(private http: HttpClient) { }

  getProps(): Observable<any> {
    console.log('Services Getting all props');
    return this.http.get<any[]>(this.backendUrlBase + '/props')    
      .pipe(        
        map(dto => dto.map(d => new Prop(d.id, d.name, d.lastRunning, d.activatable))
        )        
      );     
  }

  activateProp(id: number): Observable<any> {
    console.log('activating prop ' + id);
    return this.http.put(this.backendUrlBase + '/props/'+ id + '/activate/', '{}', this.httpOptions);
  }
}
