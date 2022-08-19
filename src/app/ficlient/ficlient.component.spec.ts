import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIClientComponent } from './ficlient.component';

describe('FIClientComponent', () => {
  let component: FIClientComponent;
  let fixture: ComponentFixture<FIClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
