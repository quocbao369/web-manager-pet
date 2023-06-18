import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPet2Component } from './details-pet2.component';

describe('DetailsPet2Component', () => {
  let component: DetailsPet2Component;
  let fixture: ComponentFixture<DetailsPet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPet2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
