import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMkComponent } from './add-edit-mk.component';

describe('AddEditMkComponent', () => {
  let component: AddEditMkComponent;
  let fixture: ComponentFixture<AddEditMkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
