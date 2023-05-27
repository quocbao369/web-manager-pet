import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DeTaiWeb';
  @ViewChild(MatSidenav)'sidenav':MatSidenav;
  value = '';
  public isOpened = false;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = isLoggedIn === 'true';
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
// Hàm xử lý đăng nhập thành công
  handleLoginSuccess() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }
  handleLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}