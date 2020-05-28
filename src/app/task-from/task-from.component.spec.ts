import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFromComponent } from './task-from.component';

describe('TaskFromComponent', () => {
  let component: TaskFromComponent;
  let fixture: ComponentFixture<TaskFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
