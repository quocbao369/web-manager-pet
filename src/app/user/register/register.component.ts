import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user !: User;
  public users: User[] = [];


  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private http: HttpService) {
    this.user = new User(0, '', '', '');
  }

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.http.getCheckUser().subscribe(
      (response) => {
        this.users = response;
      })
  }
  register(registerForm: any) {
    if (registerForm.valid) {
      const create = this.user;
      if (create) {
        const ischeck = this.chekcUser(create.username);
        if (ischeck) {
          this.openSnackBar('Account already exists');
        }
        else {
          this.http.addUser(create).subscribe((data) => {
            console.log('oke', data);
            this.backtologin();
            this.openSnackBar('Create success !!!');
            this.user = new User(0, '', '', '');
          })
        }
      } else {
        console.log('ko1', create);
        this.openSnackBar('Please fill in the information');
      }
    } else {
      this.openSnackBar('Please fill in the information');
    }
  }

  //check tài khoản trùng
  chekcUser(username: string): boolean {
    for (let user of this.users) {
      if (user.username === username) {
        return true; // Tìm thấy username 

      }
    }
    return false; // Không tìm thấy username 
  }

  backtologin() {
    this.router.navigate(['login']);
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}
