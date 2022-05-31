import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WodennComponent } from './wodenn.component';

describe('WodennComponent', () => {
  let component: WodennComponent;
  let fixture: ComponentFixture<WodennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WodennComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WodennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
