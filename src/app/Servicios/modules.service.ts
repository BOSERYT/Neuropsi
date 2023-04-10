import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modules} from '../Interfaces/Modules'

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getModules():Observable<Modules[]>{
    let direccion = this.url + "/Modules";
    return this.http.get<Modules[]>(direccion);
  }

   createModules(modules:Modules):Observable<Modules>{
     let direccion = this.url + "Modules";
     return this.http.post<Modules>(direccion,modules);
  }

  updateModules(modules:Modules):Observable<Modules>{
    let direccion = this.url + "/Modules/";
    return this.http.put<Modules>(direccion,modules);
  }

  deleteModules(modules:Modules, id:any):Observable<Modules>{
    let direccion = this.url + "/Modules/" + id
    return this.http.delete<Modules>(direccion);
  }

  getSingleModules(id:any):Observable<Modules>{
    let direccion = this.url + "/Modules/" + id;
    return this.http.get<Modules>(direccion);
  }
}
