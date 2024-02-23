import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componetes/login/login.component';
import { PrincipalComponent } from './componetes/principal/principal.component';


const routes: Routes = [

  {path:"", redirectTo:"login",pathMatch:"full"}, // 
  
  
  //creando rutas
  {path:"login",component:LoginComponent} ,
  {path:"principal",component:PrincipalComponent} 
 
  
  
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
