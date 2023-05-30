import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent  {
  @ViewChild('element') element: any;
  @Input() public pet!:Pets;
  constructor(private http:HttpService,
    private snackBar: MatSnackBar){}

  toggleFavorite(pet: Pets) {
    console.log('chao',pet.id);
    this.http.updateToggleFavorite(pet).subscribe((response) =>
    {
      this.pet.favorite = !this.pet.favorite;
      if(pet.favorite==true){
            this.openSnackBar('Add to favorites successfully!!!');
      }
      else{
        this.openSnackBar('Cancel favorites successfully!!!');
      }
    }
    );
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}
