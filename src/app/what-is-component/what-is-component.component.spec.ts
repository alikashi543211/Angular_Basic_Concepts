import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsComponentComponent } from './what-is-component.component';

describe('WhatIsComponentComponent', () => {
  let component: WhatIsComponentComponent;
  let fixture: ComponentFixture<WhatIsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
