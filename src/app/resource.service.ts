import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private httpClient: HttpClient) { }

  public user(): Observable<any> {
    return this.httpClient.get<any>('/resource/user');
  }

  public admin(): Observable<any> {
    return this.httpClient.get<any>('/resource/admin');
  }
}
