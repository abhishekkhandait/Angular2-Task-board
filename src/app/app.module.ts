import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatDialogModule,
  MatGridListModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DndModule } from 'ng2-dnd';
import { DatepickerModule } from 'angular2-material-datepicker';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { BoardComponent } from './board/board.component';
import { TaskCardComponent } from './board/shared/task-card/task-card.component';
import { ContentComponent } from './core/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent,
    TaskCardComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DndModule.forRoot(),
    DatepickerModule,
    Ng2FilterPipeModule,
  ],
  exports: [DndModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
