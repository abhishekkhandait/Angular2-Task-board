import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaskModel } from '../../../models/task-model';

import { TaskCardComponent } from './task-card.component';

describe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;
  let expectedTask: TaskModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardComponent);
    component = fixture.componentInstance;
    // pretend that it was wired to something that supplied a task
    expectedTask = new TaskModel(1, 'Test task', 'New', new Date , 10, 1);
    component.task = expectedTask;
    fixture.detectChanges();
  });

  it('should create task component', () => {
    expect(component).toBeTruthy();
  });
});
