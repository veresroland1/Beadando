import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunkakComponent } from './munkak.component';

describe('MunkakComponent', () => {
  let component: MunkakComponent;
  let fixture: ComponentFixture<MunkakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunkakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunkakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
