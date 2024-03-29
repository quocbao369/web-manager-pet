import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'DeTaiWeb';
  @ViewChild(MatSidenav)'sidenav':MatSidenav;
  value = '';
  public isOpened = false;
  isLoggedIn: boolean = false;
  isRegister: boolean = false;
  isHome:boolean=false;
  constructor(private router:Router){}

  ngDoCheck() {
    const value = localStorage.getItem('setlogin');
    console.log(value)
    if(value=='admin'){
      this.isHome=true;
    }else{
      this.isHome=false; 
      this.isLoggedIn = false;

    }
  }

  public openLeftSide(){
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
    console.log('menu');
  }
  
  public closeLeftSide(){
    this.isOpened = false;
  }

  public input(){
    
  }
// hàm sử lý đăng ký tài khoản
  handleLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['login']);
  }
}