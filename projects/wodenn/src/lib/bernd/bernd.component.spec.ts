import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerndComponent } from './bernd.component';

describe('BerndComponent', () => {
  let component: BerndComponent;
  let fixture: ComponentFixture<BerndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BerndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
