import { Injectable } from '@angular/core';
import { Pets } from '../model/pets';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private REST_API_SERVER='http://localhost:3000';
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  };
  constructor(private httpCilent: HttpClient) { }
  //thêm pets mới
  public addPets(pets: any){
    const url = `${this.REST_API_SERVER}/pets`;
    return this.httpCilent.post<any>(url,pets);
  }
  //select toàn bộ pets
  public getPets() : Observable<any>{
    const url = `${this.REST_API_SERVER}/pets`;
    console.log('getPet=',url);
    return this.httpCilent.get<any>(url, this.httpOptions);
  }
  //selcet pets theo id
  public getPetsInfor(id : string) : Observable<Pets>{
    const url = `${this.REST_API_SERVER}/pets/${id}`;
    return this.httpCilent.get<Pets>(url).pipe()
  }
  //sửa pet
  public updatePet(pet: Pets): Observable<Pets> {
    const url = `${this.REST_API_SERVER}/pets/${pet.id}`;
    return this.httpCilent.put<Pets>(url, pet).pipe(
      catchError((error: any) => {
        console.error('Error updating pet:', error);
        throw error;
      })
    );
  }
  
  //xóa pets
  public deletePets(id: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/pets/${id}`;
    return this.httpCilent.delete<any>(url, this.httpOptions);
  }
  // ****************//
  //login user
  addUser(user:any): Observable<any> {
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpCilent.post(url,user);
  }
  //kiểm tra người dùng
  public getCheckUser() : Observable<any>{
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpCilent.get<any>(url, this.httpOptions);
  }
  updateToggleFavorite(pet: Pets): Observable<Pets> {
    const url = `${this.REST_API_SERVER}/pets/`+pet.id;
    return this.httpCilent.patch<Pets>(url,
      {
        favorite: !pet.favorite
      });
  }
  // ****************//
  addCart(cart:any):Observable<any>{
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpCilent.post(url,cart);
  }
  getCart():Observable<any>{
    const url = `${this.REST_API_SERVER}/cart`;
    return this.httpCilent.get<any>(url, this.httpOptions);
  }
  deleteCart(id:string):Observable<any> {
    const url = `${this.REST_API_SERVER}/cart/${id}`;
    return this.httpCilent.delete<any>(url, this.httpOptions);
  }
}

