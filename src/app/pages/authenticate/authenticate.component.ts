import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api-service';


@Component({

  templateUrl:'authenticate.component.html',
  styleUrls:['authenticate.component.scss']
})
export class AuthenticateComponent{
id:any;
  constructor(private route: ActivatedRoute,private http:ApiService){
    this.route.queryParams.subscribe(params => {
      if(params.id){
        this.id =params.id;
this.login();
      }


    })
  }
  login (){
    this.http.login(this.id).subscribe((data)=>{
      console.log(data);
      if(data["data"].token){
        localStorage.setItem("token",data["data"].token);
        localStorage.setItem("name",`${data["data"].firstName}  ${data["data"].lastName}`)
      }

    },err=>{
      console.log(err);
    })
  }
}
