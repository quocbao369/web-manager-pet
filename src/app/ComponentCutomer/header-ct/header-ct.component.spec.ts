import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCTComponent } from './header-ct.component';

describe('HeaderCTComponent', () => {
  let component: HeaderCTComponent;
  let fixture: ComponentFixture<HeaderCTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
