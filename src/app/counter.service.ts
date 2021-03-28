import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inActivecount = 0;
  activecount = 0;


  setToInactive() {
    this.inActivecount++;
    console.log('inActivecount', this.inActivecount);
  }
  setToActive() {
    this.activecount++;
    console.log('activecount', this.activecount);
  }

}
