import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetsService } from './services/pets.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { PetsComponent } from './Component/pets/pets.component';
import { ListPetsComponent } from './Component/list-pets/list-pets.component';
import { CreatePetsComponent } from './Component/create-pets/create-pets.component';
import { FavoritePetsComponent } from './Component/favorite-pets/favorite-pets.component';
import { LoginComponent } from './user/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DetailPetComponent } from './Component/detail-pet/detail-pet.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TablePetComponent } from './Component/table-pet/table-pet.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // Thêm dòng này
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    ListPetsComponent,
    CreatePetsComponent,
    FavoritePetsComponent,
    LoginComponent,
    DetailPetComponent,
    TablePetComponent
  ],
  imports: [
  FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule, 
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule
    
    
  ],
  providers: [
    PetsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
