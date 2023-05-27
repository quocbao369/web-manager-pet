import { Component, OnInit, ViewChild } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-table-pet',
  templateUrl: './table-pet.component.html',
  styleUrls: ['./table-pet.component.css']
})
export class TablePetComponent implements OnInit{
  public pet!: Pets[];
  displayedColumns: string[] = ['name', 'type', 'breed', 'age', 'gender', 'color', 'size', 'healthStatus', 'feedingHabits', 'exerciseHabits', 'description','image', 'actions'];
  dataSource!: MatTableDataSource<any>;
  isLoading: boolean = false;

  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpService,
    private route: ActivatedRoute,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getDataFromAPI();
    this.isLoading = true;
  }

  getDataFromAPI() {
    this.http.getPets().subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }
  deletePet(pet: any) {
    this.http.deletePets(pet.id).subscribe(
      (res) => {
      this.getDataFromAPI();
      console.log('Successfully', res);
      this.openSnackBar('Pet deleted successfully');
    },
    (err) =>{
      console.error('Failed', err);
      this.openSnackBar('Error deleting pet');
    }
    )
  }

  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.getDataFromAPI();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}