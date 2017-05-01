import { Component, OnInit, Input } from '@angular/core';
import * as Moment from 'moment';

import { TasksService } from '../services/tasks.service';
import { BoardModel } from '../models/board-model';
import { TaskModel } from '../models/task-model';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-board',
  providers: [TasksService],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  // Local Properties
  board: BoardModel;
  tasks: TaskModel[];
  updatedTask: TaskModel;
  newTask: TaskModel;
  animateFlag = 'in';
  data: any = {
    'description': '',
    'duedate': '',
    'priority': '',
    'list': ''
  };
  public tiles = [
    { text: 'New', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#03A9F4', add: false },
    { text: 'On-Hold', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#f5c942', add: false },
    { text: 'In-Progress', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#d066e2', add: false },
    { text: 'Done', cols: 1, rows: 1, color: '#CFD8DC', titlecolor: '#ff6b68', add: false },
  ];

  @Input() boardid: string;

  constructor(
    private tasksService: TasksService,
    public dialog: MdDialog,

  ) { }

  ngOnInit() {
    this.getTasks(this.boardid);
  }


  simpleDrop($event: any, tileText: string) {
    if ($event.dragData.list !== tileText) {
      this.UpdateTask($event.dragData.id, tileText);
    }
  }

  getTasks(_boardid) {
    this.tasksService.getTasks(_boardid)
      .subscribe(
      tasks => { this.tasks = tasks;
      this.tiles.forEach(tile => {
        tile.rows = tasks.length * 0.4;
      });
      },
      err => {
        console.log(err);
      });
  }

  UpdateTask(id, tList) {
    this.tasksService.updateTask(id, tList)
      .subscribe(
      updatedTask => this.updatedTask = updatedTask,
      err => {
        console.log(err);
      });
  }

  /* New Task methods */
  showAddtask(_tiletext) {
    this.clearForm();
    this.tiles.filter(function (tile) {
      tile.text === _tiletext ? tile.add = !tile.add : tile.add = false;
    });
  }

  addNewTask(_tiletext) {
    this.tasksService.createTask('1', _tiletext, this.data.description, Moment(this.data.duedate).format('DD/MM/YYYY'), this.data.priority)
      .subscribe(newtask => this.newTask = newtask,
      err => {
        console.log(err);
      });
    this.showAddtask(_tiletext);
  }

  clearForm() {
    this.data = {
      'description': '',
      'duedate': '',
      'priority': '',
      'list': ''
    }
  }

  sortByPriority(_tiletext) {
    this.tasks.sort(function (a, b) {
      return a.priority - b.priority;
    });
  }

  sortByDate(_tiletext) {
    this.tasks.sort(function (a, b) {
      return +new Date(a.dueDate) - +new Date(b.dueDate);
    });
  }
}
