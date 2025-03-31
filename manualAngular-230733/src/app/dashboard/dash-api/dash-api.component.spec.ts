import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAPIComponent } from './dash-api.component';

describe('DashAPIComponent', () => {
  let component: DashAPIComponent;
  let fixture: ComponentFixture<DashAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
