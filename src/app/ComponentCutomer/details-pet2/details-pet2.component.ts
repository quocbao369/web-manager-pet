import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details-pet2',
  templateUrl: './details-pet2.component.html',
  styleUrls: ['./details-pet2.component.css']
})
export class DetailsPet2Component implements OnInit {
  public pet!: Pets;


constructor(public http:HttpService,private route: ActivatedRoute,private router: Router,){}
  ngOnInit() {
    this.getIF();
  }
  getIF(){
    const petID = this.route.snapshot.paramMap.get('id');
    this.http.getPetsInfor(petID ?? "").subscribe(
    (pet) => {
      this.pet = pet;
    },
    (error) =>{
    }
    );
  }
  back(){
    this.router.navigate(['Component', 'list-pets2']);
  }
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
