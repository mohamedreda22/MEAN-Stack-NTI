import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusertypeComponent } from './addusertype.component';

describe('AddusertypeComponent', () => {
  let component: AddusertypeComponent;
  let fixture: ComponentFixture<AddusertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddusertypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddusertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
