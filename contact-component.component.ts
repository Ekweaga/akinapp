import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { Directive,ElementRef,Input,HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FetchService } from '../fetch.service';
@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {
  
submitted:boolean = true;
public a:string="good";
form:any;
list = [];
success:string="";
title:string = "CONTACT US"
  card: any;
  @Output() msg = new EventEmitter<string>();
  getId: any;
  
 constructor(public router:Router, private active:ActivatedRoute,private fetch:FetchService ) { 
 
 }

 ngOnInit() {
   this.form = new FormGroup({
     id: new FormControl("",Validators.required),
     email: new FormControl('',Validators.email),
     uname:new FormControl('',Validators.required),
     pwd:new FormControl('',[Validators.minLength(6),Validators.maxLength(12)])
    
   });
   this.getId = this.active.snapshot.paramMap.get("id");
  this.fetch.getitems(this.getId).subscribe(data =>{
    this.form.patchValue(data);
  });
   
   this.form.get('email').valueChanges.subscribe(value =>{
     //alert(value);
   });
  
  
}
onsubmit(login){
  
  if(this.form.get('password').value == 123456){
this.success = "Thanks for contacting us.We will get back to you soon";
this.router.navigate(['/login',1]);
this.outmsg();
}
else{
  this.success = "Incorrect passsword";
}
}

outmsg(){
  this.msg.emit(this.form.get('email').value);
}
 

}
