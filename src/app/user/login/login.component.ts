import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username !: string;
  password !: string;

  public users !: User[];
  constructor(private http: HttpService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.load();
  }
  //lấy dữ liệu từ api
  load(){
    this.http.getCheckUser().subscribe(
      (response) =>{
         this.users =response;
      })
  }
  //kiểm tra tài khoản có tồn tại không
  login(){
    const isCredentialsValid = this.chekcUser(this.username, this.password);
    if(isCredentialsValid){
      console.log('thành công');
      this.router.navigate(['Component', 'list-pets'])
    }
    else{
      console.log('thất bại');
      this.openSnackBar('Check your account again !!!');
    }
  }
  //check tài khoản trùng
  chekcUser(username: string, password: string):boolean{
    for (let user of this.users) {
      if (user.username === username && user.password === password) {
        return true; // Tìm thấy username và password trong mảng
      }
    }
    return false; // Không tìm thấy username và password trong mảng
  }
  //message
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}
