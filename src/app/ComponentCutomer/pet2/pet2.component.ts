import { Component, Input } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-pet2',
  templateUrl: './pet2.component.html',
  styleUrls: ['./pet2.component.css']
})
export class Pet2Component {
  @Input() public pet!:Pets;
  constructor(private http:HttpService){}
}
