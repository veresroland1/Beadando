import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMunComponent } from './add-edit-mun.component';

describe('AddEditMunComponent', () => {
  let component: AddEditMunComponent;
  let fixture: ComponentFixture<AddEditMunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
