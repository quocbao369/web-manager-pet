import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-ct',
  templateUrl: './header-ct.component.html',
  styleUrls: ['./header-ct.component.css']
})
export class HeaderCTComponent implements DoCheck {
  header:boolean=true
  constructor(private router:Router){}

  ngDoCheck(): void {
    const value = localStorage.getItem('login');
    if(value=='true'){
      this.header=false;
    }
    else{
      this.header=true;
    }

  }
  logout(){
    this.router.navigate(['login']);
    this.header=false;
  }
}
