import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Profiles} from '../Interfaces/Profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getProfiles():Observable<Profiles[]>{
    let direccion = this.url + "/Profiles";
    return this.http.get<Profiles[]>(direccion);
  }

   createProfiles(profiles:Profiles):Observable<Profiles>{
     let direccion = this.url + "Profiles";
     return this.http.post<Profiles>(direccion,profiles);
  }

  updateProfiles(profiles:Profiles):Observable<Profiles>{
    let direccion = this.url + "/Profiles/";
    return this.http.put<Profiles>(direccion,profiles);
  }

  deleteProfiles(profiles:Profiles, id:any):Observable<Profiles>{
    let direccion = this.url + "/Profiles/" + id
    return this.http.delete<Profiles>(direccion);
  }

  getSingleProfiles(id:any):Observable<Profiles>{
    let direccion = this.url + "/Profiles/" + id;
    return this.http.get<Profiles>(direccion);
  }
}
