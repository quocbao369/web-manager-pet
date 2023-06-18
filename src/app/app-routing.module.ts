import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './Component/pets/pets.component';
import { ListPetsComponent } from './Component/list-pets/list-pets.component';
import { CreatePetsComponent } from './Component/create-pets/create-pets.component';
import { FavoritePetsComponent } from './Component/favorite-pets/favorite-pets.component';
import { DetailPetComponent } from './Component/detail-pet/detail-pet.component';
import { TablePetComponent } from './Component/table-pet/table-pet.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './Component/header/header.component';
import { DetailsPet2Component } from './ComponentCutomer/details-pet2/details-pet2.component';
import { ListPetUserComponent } from './ComponentCutomer/list-pet-user/list-pet-user.component';
import { CartComponent } from './ComponentCutomer/cart/cart.component';
import { StatisticsComponent } from './Component/statistics/statistics.component';

const routes: Routes = [
  { path:'',redirectTo:'Component/list-pets2', pathMatch:'full'},
  { path:'Component/pets', component: PetsComponent},
  { path:'Component/list-pets', component: ListPetsComponent},
  { path:'Component/create-pets', component: CreatePetsComponent},
  { path:'Component/favorite-pets', component: FavoritePetsComponent},
  { path:'Component/table-pets', component: TablePetComponent},
  { path:'header', component: HeaderComponent},
  { path:'Component/statistics', component: StatisticsComponent},


  { path:'Component/detail/:id',component: DetailPetComponent},


  { path:'Component/cart', component: CartComponent},
  { path:'Component/list-pets2',component: ListPetUserComponent},
  { path:'Component/detail2/:id',component: DetailsPet2Component},

  { path:'login',component: LoginComponent},
  { path:'register',component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
