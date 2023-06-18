import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/model/customer';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  revenue: number = 0;
  soldOrders: number = 0;
  public dataSource = new MatTableDataSource<Customer>();
  public displayedColumns: string[] = ['name', 'phone', 'address', 'price', 'namepet', 'timebuy','actions'];

  public customers: Customer[] = [];
  constructor(private http:HttpService,private snackBar: MatSnackBar) {
    this.dataSource.data = this.customers;
   }

  ngOnInit(): void {
    // Tính toán doanh thu và số lượng đơn hàng đã bán
    this.getDataBase();
  }

  getDataBase(){
    this.http.getCart().subscribe((customers: Customer[]) => {
      this.customers = customers;
      this.dataSource.data = customers;
      this.soldOrders = customers.length; // Tính toán số lượng đơn hàng
      this.revenue = customers.reduce((sum, customer) => sum + customer.price, 0); // Tính tổng giá tiền
    });
  }
  onDelete(customer: any): void {
    this.http.deleteCart(customer.id).subscribe(
      (res) => {
      this.getDataBase();
      console.log('Successfully', res);
      this.openSnackBar('Deleted successfully');
    },
    (err) =>{
      console.error('Failed', err);
      this.openSnackBar('Error deleting pet');
    }
    )
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}