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

const routes: Routes = [
  { path:'',redirectTo:'login', pathMatch:'full'},
  { path:'Component/pets', component: PetsComponent},
  { path:'Component/list-pets', component: ListPetsComponent},
  { path:'Component/create-pets', component: CreatePetsComponent},
  { path:'Component/favorite-pets', component: FavoritePetsComponent},
  { path:'Component/table-pets', component: TablePetComponent},
  { path:'Component/detail/:id',component: DetailPetComponent},
  { path:'login',component: LoginComponent},
  { path:'register',component: RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
