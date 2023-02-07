import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorConceptComponent } from './decorator-concept.component';

describe('DecoratorConceptComponent', () => {
  let component: DecoratorConceptComponent;
  let fixture: ComponentFixture<DecoratorConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
