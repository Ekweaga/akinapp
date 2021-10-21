import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { FetchService } from '../fetch.service';
import { RegisterComponent } from '../register/register.component';
import { Model } from '../model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:any;
  router: any;
  success: string;
  showitems: any;
  bol:boolean=true;
  data:Model;
  onmessage:string;
  post:any;
  error: any;
  errormessage: any;
  val: any;
  vals: any;
  
  
  constructor(private active:ActivatedRoute,private fetch:FetchService, private getinfo:Router) { }

  ngOnInit() {
  
  console.log(this.fetch.getdisplay());
    
    
    
    this.loginform = new FormGroup({
      email: new FormControl('',Validators.email),
      password:new FormControl('',[Validators.minLength(6),Validators.maxLength(12)])
 
    });
  }
  
   

  onlogin(){
    this.data = this.loginform.value;
    this.fetch.getitem().subscribe(val=>{
      console.log(val);
      this.vals = val;
    },err =>{
      alert(err.message);
    }
    );
   
    }

  
  
  

  }
  


