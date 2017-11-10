import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuspageComponent } from './aboutuspage.component';

describe('AboutuspageComponent', () => {
  let component: AboutuspageComponent;
  let fixture: ComponentFixture<AboutuspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutuspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutuspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
