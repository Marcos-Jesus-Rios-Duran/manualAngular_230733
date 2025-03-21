import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcatableComponent } from './barcatable.component';

describe('BarcatableComponent', () => {
  let component: BarcatableComponent;
  let fixture: ComponentFixture<BarcatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarcatableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
