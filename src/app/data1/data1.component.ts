import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component {
  constructor(private service: DataserviceService) {
    this.service.uname.subscribe(nm => {
      this.uname = nm;
    })
  }
  uname: any;
  change(name: { value: string; }) {
    this.service.uname.next(name.value);
    name.value = '';
  }
}