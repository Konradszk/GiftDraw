import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginDTO } from '../../../login/dto/loginDTO';
import { RegisterDTO } from '../../../login/dto/register-dto';
import { map } from 'rxjs/operators';

const AUTH_HEADER = 'Authorization';

@Injectable({
  providedIn: 'root'
})
// todo change to interface and Inject Token or forRoot
export class AuthService {
  private url: string = `${environment.apiUrl}/auth`;

  public constructor(private readonly http: HttpClient) {
  }

  public login(dto: LoginDTO): Observable<any> {
    return this.http.post(`${this.url}/login`, dto, { observe: 'response' }).pipe(
      map(res => res.headers.get(AUTH_HEADER))
    );
  }

  public register(dto: RegisterDTO): Observable<any> {
    return this.http.post(`${this.url}/register`, dto, { observe: 'response' });
  }
}
