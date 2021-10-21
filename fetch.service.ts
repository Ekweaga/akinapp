import { Injectable } from '@angular/core';

import {  Observable, observable, from, throwError, interval } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Model } from './model';


import {catchError, map, tap, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchService {
  disp:any;
  items =[
    {
      "name":"Ekweaga Charles", "stack":"Front-end developer","id":"1"
    },{
      "name":"Ekweaga Charle", "stack":"Front-end developer","id":"1"
    },{
      "name":"Ekweaga Charl", "stack":"Front-end developer","id":"1"
    }];
   
  

 

  private url:string="http://localhost/AKINAPP/php";
 

  constructor(private http:HttpClient) { }
  getdisplay(){
    this.disp = this.items;
    return this.disp.filter(response=>{
      return(response.name == "Ekweaga Charle");
    })
  }
  getitem(){
    return this.http.get("http://localhost:3000/users").pipe(catchError(this.errorhandler),
    retry(3),
    map(response =>{
      alert(response)
    }),

    )
  }

  

  delete(id:Model){
    return this.http.delete<Model>("http://localhost/delete.php?id="+ id);
  }
  login(user:Model):Observable<Model>{
 return this.http.post<Model>("http://localhost:3000/users",user)

 
}
  reg(data:Model){
    return this.http.post<Model>("http://localhost/insert.php",data);
  }
  getitems(ID:Model){
    return this.http.get<Model>("http://localhost/update.php"+ ID);
  }
  errorhandler(error:HttpErrorResponse){
    if(error.type){
  if(error.error instanceof ErrorEvent){
    console.log(error.statusText)
    return throwError("Something went wrong");
    
     
   }
  }
}
  
  

}
