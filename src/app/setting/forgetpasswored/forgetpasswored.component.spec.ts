import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpassworedComponent } from './forgetpasswored.component';

describe('ForgetpassworedComponent', () => {
  let component: ForgetpassworedComponent;
  let fixture: ComponentFixture<ForgetpassworedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetpassworedComponent]
    });
    fixture = TestBed.createComponent(ForgetpassworedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
