import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  private url: string = `${environment.apiUrl}/draw`;

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public getTestText(): Observable<string> {
    return this.http.get(`${this.url}/test`, { responseType: 'text' });
  }
}
