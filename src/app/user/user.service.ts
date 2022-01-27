import { Injectable } from '@angular/core';

import { UserModel } from './model/userModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {



  constructor(private http: HttpClient) {}

  save(data :UserModel) {
    this.http.post<UserModel>('http://localhost:8080/user',data).subscribe();

  }
}
