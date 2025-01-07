import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-two',
  standalone: false,
  
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit ,OnDestroy{

  constructor(private _myS:MyServiceService) { 
    console.log('Child component created!');
  }
  msg=''

  // hello() {
  //   alert('Hello from child');
  // }

  // Congrats() {
  //   alert('Congrats from child');
  // }

  // 1. Create a private property of type Subscription. This will be used to store the subscription. 
  private mySubscription: Subscription = new Subscription();
  ngOnInit(): void {  
    // 2. Subscribe to the observable in the ngOnInit lifecycle hook.  
    const mySubscription =
    this._myS.getNewMessage().subscribe(msg => {
      this.msg = msg;
    });
    // 3. Store the subscription in the private property.
    this.mySubscription.add(mySubscription);
  }


  
  ngOnDestroy(): void {
    // 4. Unsubscribe from the observable in the ngOnDestroy lifecycle hook. 
    this.mySubscription.unsubscribe();
  }
  getMsg() {
    this.msg = this._myS.getMessage();
  }
}
