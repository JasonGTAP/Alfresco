import { Injectable } from "@angular/core";
import {LoginI} from '../../app/modelos/login.interface';
import {ResponseI} from '../../app/modelos/response.interface';
import {HttpClient,HttpHandler}from '@angular/common/http'
import { Observable } from "rxjs";


@Injectable({
providedIn:"root"


})
export class ApiSerice {


    url:string ="http://34.28.152.207/alfresco/api/-default-/public/authentication/versions/1/"

constructor(private http:HttpClient){



}

loginByEmail(form:LoginI):Observable<ResponseI>{

    let direccion = this.url+"tickets";


return this.http.post<ResponseI>(direccion,form);

}




}