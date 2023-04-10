import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TherapistsPatients} from  '../Interfaces/TherapistsPatients'

@Injectable({
  providedIn: 'root'
})
export class TherapistsService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getTherapistsPatients():Observable<TherapistsPatients[]>{
    let direccion = this.url + "/TherapistsPatients";
    return this.http.get<TherapistsPatients[]>(direccion);
  }

   createTherapistsPatients(TherapistsPatients:TherapistsPatients):Observable<TherapistsPatients>{
     let direccion = this.url + "TherapistsPatients";
     return this.http.post<TherapistsPatients>(direccion,TherapistsPatients);
  }

  updateTherapistsPatients(TherapistsPatients:TherapistsPatients):Observable<TherapistsPatients>{
    let direccion = this.url + "/TherapistsPatients/";
    return this.http.put<TherapistsPatients>(direccion,TherapistsPatients);
  }

  deleteTherapistsPatients(TherapistsPatients:TherapistsPatients, id:any):Observable<TherapistsPatients>{
    let direccion = this.url + "/TherapistsPatients/" + id
    return this.http.delete<TherapistsPatients>(direccion);
  }

  getSingleTherapistsPatients(id:any):Observable<TherapistsPatients>{
    let direccion = this.url + "/TherapistsPatients/" + id;
    return this.http.get<TherapistsPatients>(direccion);
  }
}
