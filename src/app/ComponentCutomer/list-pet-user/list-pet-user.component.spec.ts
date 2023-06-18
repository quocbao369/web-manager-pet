import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPetUserComponent } from './list-pet-user.component';

describe('ListPetUserComponent', () => {
  let component: ListPetUserComponent;
  let fixture: ComponentFixture<ListPetUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPetUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
