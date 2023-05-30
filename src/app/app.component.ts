import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'DeTaiWeb';
  @ViewChild(MatSidenav)'sidenav':MatSidenav;
  value = '';
  public isOpened = false;
  isLoggedIn: boolean = false;

  constructor(private router:Router){}

  ngDoCheck() {
    
    let curenturl=this.router.url;
    if(curenturl=='/login'|| curenturl=='/register'){
      this.isLoggedIn=false;
    }else{
      this.isLoggedIn=true; 
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