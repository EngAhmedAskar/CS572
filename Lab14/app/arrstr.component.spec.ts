import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrstrComponent } from './arrstr.component';

describe('ArrstrComponent', () => {
  let component: ArrstrComponent;
  let fixture: ComponentFixture<ArrstrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrstrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
