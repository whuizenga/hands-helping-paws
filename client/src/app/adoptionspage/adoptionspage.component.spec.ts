import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionspageComponent } from './adoptionspage.component';

describe('AdoptionspageComponent', () => {
  let component: AdoptionspageComponent;
  let fixture: ComponentFixture<AdoptionspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
