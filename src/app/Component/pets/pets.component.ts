import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { PetsService } from '../../services/pets.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent  {
  @ViewChild('element') element: any;
  @Input() public pet!:Pets;
  constructor(private http:HttpService){}
//   ngOnInit() {
//     //   //   this.http.getPets().subscribe(pets=>{this.pets = pets;})
//  this.http.getPetsInfor('1')
//  .subscribe(data => this.pet = data);
//   console.log('pet:',this.pet)
//   }
  // constructor(private petSV:PetsComponent,
  //   private httpService:HttpService){}
//    ngOnInit() {
//   //   this.http.getPets().subscribe(pets=>{this.pets = pets;})
//   this.httpService.getPetsInfor('1').subscribe(pet => this.pet = pet);
//   console.log('id='+ this.pet);
// }
  // ngOnInit(){
  //   this.pets= new Pets(1,'milo','','',1,'','','','','','','the dog is beautifull','',);
  // }
}
