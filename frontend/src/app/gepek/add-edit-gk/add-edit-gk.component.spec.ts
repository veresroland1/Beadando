import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGkComponent } from './add-edit-gk.component';

describe('AddEditGkComponent', () => {
  let component: AddEditGkComponent;
  let fixture: ComponentFixture<AddEditGkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
