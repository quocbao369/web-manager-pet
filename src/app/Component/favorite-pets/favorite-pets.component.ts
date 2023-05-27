import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-favorite-pets',
  templateUrl: './favorite-pets.component.html',
  styleUrls: ['./favorite-pets.component.css']
})
export class FavoritePetsComponent {
  selectedFile: File | null = null;
  public img !:string;
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    // this.selectedFile = event.target.files[0];
    const file: File = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const base64String: string = reader.result as string;
    console.log('Chuỗi base64:', base64String);
    this.img=base64String;
    // Gửi chuỗi base64 đến API hoặc thực hiện các xử lý khác
  };
  reader.readAsDataURL(file);
  }

  
  uploadFile() {
    // if (this.selectedFile) {
    //   const formData = new FormData();
    //   formData.append('image', this.selectedFile);
    //   formData.append('name','name');

    //   this.http.post<any>('http://localhost:3000/testImg', formData).subscribe(
    //     (response) => {
    //       // Xử lý thành công
    //       console.log(response);
    //     },
    //     (error) => {
    //       // Xử lý lỗi
    //       console.error(error);
    //     }
    //   );
    // }
    this.onFileSelected(Event);
  }
}