import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusPatients} from  '../Interfaces/StatusPatients'

@Injectable({
  providedIn: 'root'
})
export class StatusPatientsService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getStatusPatients():Observable<StatusPatients[]>{
    let direccion = this.url + "/StatusPatients";
    return this.http.get<StatusPatients[]>(direccion);
  }

   createStatusPatients(StatusPatients:StatusPatients):Observable<StatusPatients>{
     let direccion = this.url + "StatusPatients";
     return this.http.post<StatusPatients>(direccion,StatusPatients);
  }

  updateStatusPatients(StatusPatients:StatusPatients):Observable<StatusPatients>{
    let direccion = this.url + "/StatusPatients/";
    return this.http.put<StatusPatients>(direccion,StatusPatients);
  }

  deleteStatusPatients(StatusPatients:StatusPatients, id:any):Observable<StatusPatients>{
    let direccion = this.url + "/StatusPatients/" + id
    return this.http.delete<StatusPatients>(direccion);
  }

  getSingleStatusPatients(id:any):Observable<StatusPatients>{
    let direccion = this.url + "/StatusPatients/" + id;
    return this.http.get<StatusPatients>(direccion);
  }
}
