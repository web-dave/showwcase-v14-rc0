import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierComponent } from './hier.component';

describe('HierComponent', () => {
  let component: HierComponent;
  let fixture: ComponentFixture<HierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
