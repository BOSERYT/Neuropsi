import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roles} from  '../Interfaces/Roles'

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getRoles():Observable<Roles[]>{
    let direccion = this.url + "/Roles";
    return this.http.get<Roles[]>(direccion);
  }

   createRoles(roles:Roles):Observable<Roles>{
     let direccion = this.url + "Roles";
     return this.http.post<Roles>(direccion,roles);
  }

  updateRoles(roles:Roles):Observable<Roles>{
    let direccion = this.url + "/Roles/";
    return this.http.put<Roles>(direccion,roles);
  }

  deleteRoles(roles:Roles, id:any):Observable<Roles>{
    let direccion = this.url + "/Roles/" + id
    return this.http.delete<Roles>(direccion);
  }

  getSingleRoles(id:any):Observable<Roles>{
    let direccion = this.url + "/Roles/" + id;
    return this.http.get<Roles>(direccion);
  }
}
