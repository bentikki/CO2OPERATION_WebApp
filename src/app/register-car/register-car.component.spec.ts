import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarComponent } from './register-car.component';

describe('RegisterCarComponent', () => {
  let component: RegisterCarComponent;
  let fixture: ComponentFixture<RegisterCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
