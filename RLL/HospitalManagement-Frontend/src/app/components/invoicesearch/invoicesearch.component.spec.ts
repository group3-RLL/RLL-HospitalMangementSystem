import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesearchComponent } from './invoicesearch.component';

describe('InvoicesearchComponent', () => {
  let component: InvoicesearchComponent;
  let fixture: ComponentFixture<InvoicesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
