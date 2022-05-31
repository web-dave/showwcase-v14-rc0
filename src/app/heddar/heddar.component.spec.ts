import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeddarComponent } from './heddar.component';

describe('HeddarComponent', () => {
  let component: HeddarComponent;
  let fixture: ComponentFixture<HeddarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeddarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeddarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
