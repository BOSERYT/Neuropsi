import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Therapists} from  '../Interfaces/Therapists'

@Injectable({
  providedIn: 'root'
})
export class TherapistsPatientsService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getTherapists():Observable<Therapists[]>{
    let direccion = this.url + "/Therapists";
    return this.http.get<Therapists[]>(direccion);
  }

   createTherapists(Therapists:Therapists):Observable<Therapists>{
     let direccion = this.url + "Therapists";
     return this.http.post<Therapists>(direccion,Therapists);
  }

  updateTherapists(Therapists:Therapists):Observable<Therapists>{
    let direccion = this.url + "/Therapists/";
    return this.http.put<Therapists>(direccion,Therapists);
  }

  deleteTherapists(Therapists:Therapists, id:any):Observable<Therapists>{
    let direccion = this.url + "/Therapists/" + id
    return this.http.delete<Therapists>(direccion);
  }

  getSingleTherapists(id:any):Observable<Therapists>{
    let direccion = this.url + "/Therapists/" + id;
    return this.http.get<Therapists>(direccion);
  }
}
