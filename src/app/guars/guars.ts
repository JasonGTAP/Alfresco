import { retry } from "rxjs"

export const Guars=()=> {


if(localStorage.getItem("token")){

return true

}else{
    return false}

}

