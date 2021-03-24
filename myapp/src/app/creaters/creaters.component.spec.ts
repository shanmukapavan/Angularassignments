import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatersComponent } from './creaters.component';

describe('CreatersComponent', () => {
  let component: CreatersComponent;
  let fixture: ComponentFixture<CreatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
