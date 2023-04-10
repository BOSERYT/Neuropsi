import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RolesTherapists } from '../Interfaces/RoleTherapists';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleTherapistsService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getRolesTherapists():Observable<RolesTherapists[]>{
    let direccion = this.url + "/RolesTherapists";
    return this.http.get<RolesTherapists[]>(direccion);
  }

   createRolesTherapists(rolestherapists:RolesTherapists):Observable<RolesTherapists>{
     let direccion = this.url + "RolesTherapists";
     return this.http.post<RolesTherapists>(direccion,rolestherapists);
  }

  updateRolesTherapists(rolestherapists:RolesTherapists):Observable<RolesTherapists>{
    let direccion = this.url + "/RolesTherapists/";
    return this.http.put<RolesTherapists>(direccion,rolestherapists);
  }

  deleteRolesTherapists(rolestherapists:RolesTherapists, id:any):Observable<RolesTherapists>{
    let direccion = this.url + "/RolesTherapists/" + id
    return this.http.delete<RolesTherapists>(direccion);
  }

  getSingleRolesTherapists(id:any):Observable<RolesTherapists>{
    let direccion = this.url + "/RolesTherapists/" + id;
    return this.http.get<RolesTherapists>(direccion);
  }
}
