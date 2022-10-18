import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpatientComponent } from './regpatient.component';

describe('RegpatientComponent', () => {
  let component: RegpatientComponent;
  let fixture: ComponentFixture<RegpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
