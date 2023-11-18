import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { LoginInterFace } from '../models/login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="assets/fake-json/";
  constructor(private httpc: HttpClient) { }
  userLogin(body) : Observable<LoginInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<LoginInterFace>(this.baseUrl+"user-data.json",  { headers: headers });
  }
  adminLogin(body) : Observable<LoginInterFace>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    return this.httpc.get<LoginInterFace>(this.baseUrl+"admin-data.json",  { headers: headers });
  }
}
