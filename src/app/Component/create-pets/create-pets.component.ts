import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-create-pets',
  templateUrl: './create-pets.component.html',
  styleUrls: ['./create-pets.component.css']
})
export class CreatePetsComponent {
  public pet : Pets;
  confirmed: boolean = false;
  selectedFile: File | null = null;
  constructor(private http: HttpService,
    private snackBar: MatSnackBar) {
    this.pet = new Pets(0,'1','1','1',1,'1','1','1','1','1','1','1','1');
  }
  onSubmit(createPetForm:any) {
    if(createPetForm.valid){
        const created = this.pet;
        this.http.addPets(created).subscribe(
        (data)=>{
          console.log('PostPet',data);
          this.pet = new Pets(0,'1','1','1',1,'1','1','1','1','1','1','1','1');
          this.openSnackBar('Create success !!!');
          this.confirmed=false;
          }
        );
    }
    else{
      this.openSnackBar('Create failure !!!');
    }
  }
  onFileSelected(event: any) {
     const file: File = event.target.files[0];
     const reader = new FileReader();
     reader.onload = () => {
       const base64String: string = reader.result as string;
       this.pet.img=base64String;     
     };
     reader.readAsDataURL(file);
}
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}