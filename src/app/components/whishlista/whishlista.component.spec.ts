import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishlistaComponent } from './whishlista.component';

describe('WhishlistaComponent', () => {
  let component: WhishlistaComponent;
  let fixture: ComponentFixture<WhishlistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhishlistaComponent]
    });
    fixture = TestBed.createComponent(WhishlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
