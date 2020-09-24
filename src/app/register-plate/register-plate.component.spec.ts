import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlateComponent } from './register-plate.component';

describe('RegisterPlateComponent', () => {
  let component: RegisterPlateComponent;
  let fixture: ComponentFixture<RegisterPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
