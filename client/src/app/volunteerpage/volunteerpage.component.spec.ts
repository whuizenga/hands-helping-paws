import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerpageComponent } from './volunteerpage.component';

describe('VolunteerpageComponent', () => {
  let component: VolunteerpageComponent;
  let fixture: ComponentFixture<VolunteerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
