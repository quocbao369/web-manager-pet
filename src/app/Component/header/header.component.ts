import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck{
  title = 'DeTaiWeb';
  @ViewChild(MatSidenav)'sidenav':MatSidenav;
  public isOpened = false;
  isLoggedIn: boolean = false;
  isrouter:boolean=false;
  constructor(private router:Router){}

  ngDoCheck() {
    const value = localStorage.getItem('setlogin');
    const value2 = localStorage.getItem('login');

    if(value=='admin'){
      this.isrouter=true;
      this.isLoggedIn=false
    }else{
      this.isrouter=false;
    }
    if(value2=='true'){
      this.isLoggedIn=false
    }else{
      this.isLoggedIn=true

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

// hàm sử lý đăng ký tài khoản
  handleLogout() {
    localStorage.removeItem('setlogin');
    localStorage.removeItem('login');
    this.router.navigate(['Component','list-pets2']);
  }
}
