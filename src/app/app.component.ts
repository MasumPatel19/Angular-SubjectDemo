import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subjectDemo';
  constructor(private service:DataserviceService){
    this.service.uname.subscribe(nm=>{
      this.uname=nm;
    })
  }
  
  uname:any;
  change(name: { value: string; }){
    this.service.uname.next(name.value);
  }


  


}
