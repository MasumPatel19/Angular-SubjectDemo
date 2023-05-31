import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  // uname = new Subject();
  uname = new BehaviorSubject('');

}
