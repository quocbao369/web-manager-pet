import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list-pet-user',
  templateUrl: './list-pet-user.component.html',
  styleUrls: ['./list-pet-user.component.css']
})
export class ListPetUserComponent implements OnInit {

  public pets: Pets[] = [];
  public filteredPets: Pets[] = [];
  public searchQuery: string = '';
  public selectedType: string = '';
  public selectedSize: string = '';
  public selectedGender: string = '';
  isLoading: boolean = false;
  totalItems: number = 0;
  itemsPerPage: number = 8;
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(public http:HttpService){}


  ngOnInit(): void {
    this.getPet();
    this.isLoading=true;
  }
  getPet() {
    this.http.getPets().subscribe(
      (pets) => {
        this.pets = pets;
        this.totalItems = pets.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.filterPets();
        this.isLoading = false;
      },
      (error) => {
        console.error('Failed to fetch pets:', error);
        this.isLoading = false;
      }
    );
  }

  filterPets() {
    this.filteredPets = this.pets.filter((pet) => {
      // Kiểm tra điều kiện lọc dựa trên type, size và gender
      const isTypeMatch = this.selectedType === '' || pet.type.toLowerCase() === this.selectedType.toLowerCase();
      const isSizeMatch = this.selectedSize === '' || pet.size.toLowerCase() === this.selectedSize.toLowerCase();
      const isGenderMatch = this.selectedGender === '' || pet.gender.toLowerCase() === this.selectedGender.toLowerCase();

      // Kiểm tra điều kiện tìm kiếm
      const isSearchMatch = this.searchQuery.trim() === '' 
      || pet.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      || pet.type.toLowerCase().includes(this.searchQuery.toLowerCase())
      || pet.breed.toLowerCase().includes(this.searchQuery.toLowerCase())
      || pet.size.toLowerCase().includes(this.searchQuery.toLowerCase())
      ;

      return isTypeMatch && isSizeMatch && isGenderMatch && isSearchMatch;
    });
  }

  onSearch() {
    this.filterPets();
  }

  onTypeSelect(type: string) {
    this.selectedType = type;
    this.filterPets();
  }

  onSizeSelect(size: string) {
    this.selectedSize = size;
    this.filterPets();
  }

  onGenderSelect(gender: string) {
    this.selectedGender = gender;
    this.filterPets();
  }

  getPetsForPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredPets.slice(startIndex, endIndex);
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

