import { Component,Injectable, OnInit } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit  {
  public pets: Pets[] = [];

  isLoading: boolean = false;
  constructor(private http:HttpService){}
  totalItems: number = 0;
itemsPerPage: number = 8;
currentPage: number = 1;
totalPages: number = 0;

ngOnInit() {
  this.isLoading = true;
  this.getPet();
}

getPet() {
  this.http.getPets().subscribe(
    (pets) => {
      this.pets = pets;
      this.totalItems = pets.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.isLoading = false;
      console.error('Failed to fetch pets:', pets);
    },
    (error) => {
      console.error('Failed to fetch pets:', error);
      this.isLoading = false;
    }
  );
}

getPetsForPage() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.pets.slice(startIndex, endIndex);
}

goToPreviousPage() {
  if (this.currentPage > 1) {
    this.currentPage -= 1;
  }
}

goToNextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage += 1;
  }
}
}
