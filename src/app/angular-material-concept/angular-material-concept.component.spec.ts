import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialConceptComponent } from './angular-material-concept.component';

describe('AngularMaterialConceptComponent', () => {
  let component: AngularMaterialConceptComponent;
  let fixture: ComponentFixture<AngularMaterialConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
