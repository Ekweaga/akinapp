import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { FetchService } from '../fetch.service';
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
regform:any;
  success: string;
  
  constructor(private route:Router, private fetch:FetchService) { 
   
  }

  ngOnInit() {
    this.regform = new FormGroup({
      firstname:new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      password:new FormControl('',[Validators.minLength(6),Validators.maxLength(12)]),
     
 
    });
  }
show(){
  this.route.navigate(['/image']);
}
onlogin(){
  if(this.regform.valid ){
this.success = "Thanks for contacting us.We will get back to you soon";
this.regform.reset();
this.route.navigate(['/services']);
this.fetch.reg(this.regform.value).subscribe(value =>{
 alert(value.token);


},complete=>{
  console.log("completed")
});

}
}
}
