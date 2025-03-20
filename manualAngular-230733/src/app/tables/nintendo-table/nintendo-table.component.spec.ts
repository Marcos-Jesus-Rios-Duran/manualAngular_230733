import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoTableComponent } from './nintendo-table.component';

describe('NintendoTableComponent', () => {
  let component: NintendoTableComponent;
  let fixture: ComponentFixture<NintendoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NintendoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NintendoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
