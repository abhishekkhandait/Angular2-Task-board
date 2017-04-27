import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DndModule } from 'ng2-dnd'; 
import { DatepickerModule } from 'angular2-material-datepicker';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { BoardComponent } from './board/board.component';
import { TaskCardComponent } from './board/shared/task-card/task-card.component';
import { AddTaskComponent } from './board/shared/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent,
    TaskCardComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    DndModule.forRoot(),
    DatepickerModule,
  ],
  exports: [DndModule],
  providers: [],
  bootstrap: [AppComponent, AddTaskComponent]
})
export class AppModule { }
