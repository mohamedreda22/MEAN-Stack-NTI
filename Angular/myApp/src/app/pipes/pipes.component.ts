import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  name ="Ali Ibraheem"
  name2 = "ali ibraheem"
  title="this is a title"
  myDate = new Date()
  person = {
    name: 'Ali Ibraheem',
    age: 25
  }

  grade=22/150

}
