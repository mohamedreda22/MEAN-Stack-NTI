import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  standalone: false,
  
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  msg=''

  hello() {
    alert('Hello from child');
  }

  Congrats() {
    alert('Congrats from child');
  }

}
