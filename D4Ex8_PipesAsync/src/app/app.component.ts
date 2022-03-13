import { Component } from '@angular/core';
import * as Rx from 'rxjs';
import { from, of , interval} from "rxjs";
import { map, catchError,delay, timeout,concat} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template: `
    <p>Total price of product is {{fetchPrice | async | currency:"CAD":true:"1.2-2"}}</p>
    <p>Seconds: {{seconds|async}} </p>
    <br><br><br>
   <div>
      This web page has {{ pageViews | animateNumber }} views!
      
    </div>
  `
})
export class AppComponent {
  fetchPrice = new Promise((resolve, reject) => {
    let price =100;
    setInterval(() => resolve(price++), 1000);
  })
  //The below line or the async pipe, to read data from fetchPrice
  //.then((data)=> this.fetchPrice = data );

  seconds = of("a").pipe(concat(interval(100)));
//seconds.subscribe(progress,error, success);
  pageViews = 100;

  constructor() {
    // simulate polling every 5 seconds
    setInterval(() => {
      this.pageViews += Math.round(Math.random() * 10);
    }, 3000);
  }
}
