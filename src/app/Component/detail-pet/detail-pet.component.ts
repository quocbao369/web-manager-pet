import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.css']
})
export class DetailPetComponent {
  public pet!: Pets;
  isLoading: boolean = false;
  constructor(private http:HttpService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar){}
  ngOnInit() {
    this.getIF();
    this.isLoading = true;
  }
  getIF(){
    const petID = this.route.snapshot.paramMap.get('id');
    this.http.getPetsInfor(petID ?? "").subscribe(
    (pet) => {
      this.pet = pet;
      this.isLoading = false;
    },
    (error) =>{
      this.isLoading = false;
    }
    );
  }
  upDatePet(petUpdateForm : any){
    const created = this.pet;
    // console.log('Creating stock ',created);
    this.http.updatePet(created).subscribe(
      (response) => {
        console.log('Pet updated successfully:', response);
        this.openSnackBar('Pet updated successfully');

        // Xử lý thành công
      },
      (error) => {
        console.error('Error updating pet:', error);
        this.openSnackBar('Error updating pet');

        // Xử lý lỗi
      }
    );
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
