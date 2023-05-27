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
}
