import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHeadingComponent } from './register-heading.component';

describe('RegisterHeadingComponent', () => {
  let component: RegisterHeadingComponent;
  let fixture: ComponentFixture<RegisterHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
