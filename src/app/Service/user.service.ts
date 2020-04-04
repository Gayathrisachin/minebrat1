import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl :string = " http://api.minebrat.com/api/v1/states ";
 url:string="http://api.minebrat.com/api/v1/states/cities/{stateId} "
  constructor(private http:HttpClient) { }
  getAllStates():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
      }
       getAllCities():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
      }
      getCities(stateId: number) {
        return this.http.get(this.url + '/stateId' +stateId)      }
}
