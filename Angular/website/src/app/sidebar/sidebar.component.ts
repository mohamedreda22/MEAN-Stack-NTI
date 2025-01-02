import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  constructor(private _authS :AuthService,private _router:Router) { }

  isLoggedIn = false;

  ngOnInit(): void {
    this._authS.getAccessToken().subscribe(data => {
      if(data) {
        this.isLoggedIn = true;
      }else {
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    // console.log(this.isLoggedIn);
    this._router.navigate(['/login']);
    this._authS.logout();
  }

}
