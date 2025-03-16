import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTablesComponent } from './content-tables.component';

describe('ContentTablesComponent', () => {
  let component: ContentTablesComponent;
  let fixture: ComponentFixture<ContentTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
