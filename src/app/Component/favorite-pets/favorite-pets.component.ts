import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-favorite-pets',
  templateUrl: './favorite-pets.component.html',
  styleUrls: ['./favorite-pets.component.css']
})
export class FavoritePetsComponent implements OnInit {
  isLoading: boolean = false;

  public favoritePets:Pets[]=[];

  constructor(private http:HttpService){}

  ngOnInit(): void {
    this.getPetFavorite();
    this.isLoading=true;

  }
  getPetFavorite(){
    this.http.getPets().subscribe((pets:Pets[])=>{
      this.favoritePets = pets.filter((pet:Pets)=>pet.favorite===true);
      console.log('data',this.favoritePets);
      this.isLoading=false;
    });
  };
}