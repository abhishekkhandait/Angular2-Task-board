import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { animate, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BoardComponent } from './board.component';
import { MaterialModule } from '@angular/material';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MaterialModule, Ng2FilterPipeModule, BrowserAnimationsModule ],
      declarations: [ BoardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Board component', () => {
    expect(component).toBeTruthy();
  });
});
