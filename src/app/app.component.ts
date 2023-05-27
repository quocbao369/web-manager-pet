import { Component, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeTaiWeb';
  @ViewChild(MatSidenav)'sidenav':MatSidenav;
  value = '';
  public isOpened = false;

  public openLeftSide(){
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
    console.log('menu');
  }
  public closeLeftSide(){
    this.isOpened = false;
  }
  public input(){
    alert("hello "+this.value);
  }
}
