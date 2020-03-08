import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInnerFormComponent } from './container-inner-form.component';

describe('ContainerInnerFormComponent', () => {
  let component: ContainerInnerFormComponent;
  let fixture: ComponentFixture<ContainerInnerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerInnerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerInnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
