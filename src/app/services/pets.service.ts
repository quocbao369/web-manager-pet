import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pets } from '../model/pets';
import { Observable } from 'rxjs';
import { of as ObservableOf} from 'rxjs';


@Injectable()
export class PetsService {
  private pets! : Pets[];
  constructor(private http: HttpClient) { }
  getStocks():Observable<Pets[]>{
    return ObservableOf(this.pets) ;
  }
}
