import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:61721/api";
readonly PhotoUrl="http://localhost:61721/Photos2/";

constructor(private http:HttpClient) { }

getMunList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Munkasok');
}

AddMunkasokList(val:any){
  return this.http.post(this.APIUrl+'/Munkasok',val);
}

UpdateMunkasokList(val:any){
  return this.http.put(this.APIUrl+'/Munkasok',val);
}

deleteMunkasokList(val:any){
  return this.http.delete(this.APIUrl+'/Munkasok/'+val);
}



getMkList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Munkak');
}

AddMunkakList(val:any){
  return this.http.post(this.APIUrl+'/Munkak',val);
}

UpdateMunkakList(val:any){
  return this.http.put(this.APIUrl+'/Munkak',val);
}

deleteMunkakList(val:any){
  return this.http.delete(this.APIUrl+'/Munkak/'+val);
}



getGkList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Gepek');
}

AddGepekList(val:any){
  return this.http.post(this.APIUrl+'/Gepek',val);
}

UpdateGepekList(val:any){
  return this.http.put(this.APIUrl+'/Gepek',val);
}

deleteGepekList(val:any){
  return this.http.delete(this.APIUrl+'/Gepek/'+val);
}


UploadPhoto(val:any){
  return this.http.post(this.APIUrl+'/Munkasok/SaveFile',val);
}

getAllMunkaNeve():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Munkasok/GetAllMunkaNeve');
}

}
