import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Model } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
  items:any;
  pro:any;

  constructor(private fetch:FetchService, private router:Router) { }

  ngOnInit() {
    this.fetch.getitem().subscribe(data =>{
      this.items = data;
    })
  }
  delete(v:Model){
    this.fetch.delete(v).subscribe(value =>{
      this.items = this.items.filter(u => u!== this.items);
      this.items = value;
      
    })
  }
  update(u:Model){
    this.pro = u.id;
    this.router.navigate(['/contact',this.pro]);
    

  }

}
