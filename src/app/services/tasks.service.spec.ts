import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
         TasksService,
         { provide: XHRBackend, useClass: MockBackend }
        ]
    });
  });

  it('should create Task service', inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));
});
