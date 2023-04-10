import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Answers} from '../Interfaces/Answers';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:7295/api"


  getAnswers():Observable<Answers[]>{
    let direccion = this.url + "/Answers";
    return this.http.get<Answers[]>(direccion);
  }

   createAnswers(answers:Answers):Observable<Answers>{
     let direccion = this.url + "Answers";
     return this.http.post<Answers>(direccion,answers);
  }

  updateAnswers(answers:Answers):Observable<Answers>{
    let direccion = this.url + "/Answers/";
    return this.http.put<Answers>(direccion,answers);
  }

  deleteAnswers(answers:Answers, id:any):Observable<Answers>{
    let direccion = this.url + "/Answers/" + id
    return this.http.delete<Answers>(direccion);
  }

  getSingleAnswers(id:any):Observable<Answers>{
    let direccion = this.url + "/Answers/" + id;
    return this.http.get<Answers>(direccion);
  }
}
