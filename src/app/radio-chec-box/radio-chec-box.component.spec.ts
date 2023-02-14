import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioChecBoxComponent } from './radio-chec-box.component';

describe('RadioChecBoxComponent', () => {
  let component: RadioChecBoxComponent;
  let fixture: ComponentFixture<RadioChecBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioChecBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioChecBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
