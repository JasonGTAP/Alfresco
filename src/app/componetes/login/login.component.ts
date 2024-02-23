import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,Validators,FormBuilder, FormControlName, FormControl } from '@angular/forms';
import{ApiSerice}from '../../servicios/api.service'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

    userId: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)



  })
  
  constructor(private api:ApiSerice , private router:Router){
  
  
  
  }
  
  ngOnInit(): void {
      
  
  
  
  }
  
  
  onLogin(form:any){
    
    this.api.loginByEmail(form).subscribe(data =>{
      console.log("datos ok",data);
      localStorage.setItem("datos",JSON.stringify(data))
      const Datos = localStorage.getItem("datos")
       if (typeof Datos === "string") {
        const respuesta = JSON.parse(Datos);
        localStorage.setItem("token",respuesta.entry.id)
        localStorage.setItem("user",respuesta.entry.userId)
        console.log(localStorage.getItem("token"))
        console.log(localStorage.getItem("user"))
        this.router.navigate(['/principal'])
      } 
    })
    
    
    
    

  }
  }