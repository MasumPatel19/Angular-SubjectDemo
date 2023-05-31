import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component {
  constructor(private service:DataserviceService){
    this.service.uname.subscribe(nm=>{
      this.uname=nm;
    })
  }
  
  uname:any;
  change(name: { value: string; }){
    this.service.uname.next(name.value);
    name.value='';
  }
}
