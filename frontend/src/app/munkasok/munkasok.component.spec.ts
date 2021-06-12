import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunkasokComponent } from './munkasok.component';

describe('MunkasokComponent', () => {
  let component: MunkasokComponent;
  let fixture: ComponentFixture<MunkasokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunkasokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunkasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
