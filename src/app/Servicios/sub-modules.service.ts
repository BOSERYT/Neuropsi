import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubModules} from  '../Interfaces/SubModules'

@Injectable({
  providedIn: 'root'
})
export class SubModulesService {


  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getSubModules():Observable<SubModules[]>{
    let direccion = this.url + "/SubModules";
    return this.http.get<SubModules[]>(direccion);
  }

   createSubModules(SubModules:SubModules):Observable<SubModules>{
     let direccion = this.url + "SubModules";
     return this.http.post<SubModules>(direccion,SubModules);
  }

  updateSubModules(SubModules:SubModules):Observable<SubModules>{
    let direccion = this.url + "/SubModules/";
    return this.http.put<SubModules>(direccion,SubModules);
  }

  deleteSubModules(SubModules:SubModules, id:any):Observable<SubModules>{
    let direccion = this.url + "/SubModules/" + id
    return this.http.delete<SubModules>(direccion);
  }

  getSingleSubModules(id:any):Observable<SubModules>{
    let direccion = this.url + "/SubModules/" + id;
    return this.http.get<SubModules>(direccion);
  }
}
