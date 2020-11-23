import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDTO } from '../dto/loginDTO';
import { RegisterDTO } from '../dto/register-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = `${environment.apiUrl}/auth`;

  public constructor(private readonly http: HttpClient) {
  }

  public login(dto: LoginDTO): Observable<any> {
    return this.http.post(`${this.url}/login`, dto, { observe: 'response' });
  }

  public register(dto: RegisterDTO): Observable<any>{
    return this.http.post(`${this.url}/register`, dto, {observe: 'response'});
  }
}
