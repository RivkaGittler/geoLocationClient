/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormDistanceComponent } from './form-distance.component';

describe('FormDistanceComponent', () => {
  let component: FormDistanceComponent;
  let fixture: ComponentFixture<FormDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
