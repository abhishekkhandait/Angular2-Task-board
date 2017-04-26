import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DndModule } from 'ng2-dnd'; 


import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { BoardComponent } from './board/board.component';
import { TaskCardComponent } from './board/shared/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    DndModule.forRoot(),
  ],
  exports: [DndModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
