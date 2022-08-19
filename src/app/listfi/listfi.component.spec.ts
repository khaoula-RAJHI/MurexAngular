import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfiComponent } from './listfi.component';

describe('ListfiComponent', () => {
  let component: ListfiComponent;
  let fixture: ComponentFixture<ListfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
