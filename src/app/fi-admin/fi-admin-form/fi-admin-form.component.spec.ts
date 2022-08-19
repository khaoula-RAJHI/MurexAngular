import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiAdminFormComponent } from './fi-admin-form.component';

describe('FiAdminFormComponent', () => {
  let component: FiAdminFormComponent;
  let fixture: ComponentFixture<FiAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiAdminFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
