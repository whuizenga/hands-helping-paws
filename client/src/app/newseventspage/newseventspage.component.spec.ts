import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseventspageComponent } from './newseventspage.component';

describe('NewseventspageComponent', () => {
  let component: NewseventspageComponent;
  let fixture: ComponentFixture<NewseventspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewseventspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseventspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
