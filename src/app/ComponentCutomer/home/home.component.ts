import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isrouter:boolean=false
  ngOnInit(): void {
    const value = localStorage.getItem('setlogin');
    if(value==null){
      this.isrouter=true;
    }
    else{
      this.isrouter=false;
    }
  }
}
