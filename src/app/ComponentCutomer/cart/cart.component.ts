import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<void>();
  public customer!: Customer;
  public pet!: Pets;
  public date!: string;
  constructor(public http:HttpService,private snackBar: MatSnackBar,private route: ActivatedRoute,){
    this.date = moment().format('YYYY-MM-DD HH:mm:ss');
    this.customer= new Customer(0,'',0,'',0,'','');
  }
  ngOnInit(): void {
    const petID = this.route.snapshot.paramMap.get('id');
    this.http.getPetsInfor(petID ?? "").subscribe(
      (pet)=>{
        this.pet=pet;
      }
    )
  }
  closeModal() {
    this.closeModalEvent.emit();
  }
  onSubmit(){
    if(this.customer.name==''||this.customer.address==''||this.customer.phone==0){
      console.log("lỗi");
      this.openSnackBar('Failed order !!!');
    }else{
      this.customer.timebuy = this.date;
      this.customer.price=this.pet.price;
      this.customer.namepet=this.pet.name;

      this.http.addCart(this.customer).subscribe(
        (success)=>{
          this.closeModal();
          this.openSnackBar('Successful order !!!');
          console.log("đã mua thành công",success);
        },
        (error)=>{
          console.log("đã mua không thành công",error);
        }
      )
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}