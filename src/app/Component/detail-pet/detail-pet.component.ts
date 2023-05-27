import { Component } from '@angular/core';
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
  constructor(private http:HttpService,private route: ActivatedRoute,){}
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
        // Xử lý thành công, ví dụ: hiển thị thông báo hoặc làm mới dữ liệu
      },
      (error) => {
        console.error('Error updating pet:', error);
        // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi
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
}
