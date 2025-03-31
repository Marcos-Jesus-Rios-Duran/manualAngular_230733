import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBARCAComponent } from './dash-barca.component';

describe('DashBARCAComponent', () => {
  let component: DashBARCAComponent;
  let fixture: ComponentFixture<DashBARCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBARCAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBARCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
