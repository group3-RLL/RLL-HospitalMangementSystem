import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdocComponent } from './regdoc.component';

describe('RegdocComponent', () => {
  let component: RegdocComponent;
  let fixture: ComponentFixture<RegdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
