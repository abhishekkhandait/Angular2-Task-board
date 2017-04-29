import { Component, OnInit, Input } from '@angular/core';
import * as Moment from 'moment';

import { TasksService } from '../services/tasks.service';
import { BoardModel } from '../models/board-model';
import { TaskModel } from '../models/task-model';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-board',
  providers: [TasksService],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  //Local Properties
  board: BoardModel;
  tasks: TaskModel[];
  updatedTask: TaskModel;
  newTask: TaskModel;
  data: any = {
    'description': '',
    'duedate': '',
    'priority': '',
    'list': ''
  }
  public tiles = [
    { text: 'New', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#03A9F4', add: false, tasks:'' },
    { text: 'On-Hold', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#f5c942', add: false, tasks: '' },
    { text: 'In-Progress', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#d066e2', add: false, tasks: '' },
    { text: 'Done', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#ff6b68', add: false, tasks: '' },
  ];
  
  @Input() boardid: string;

  constructor(
    private tasksService: TasksService,
    public dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.getBoardInfo();
    this.getTasks();
    //this.setTaskstoTiles();
    this.SetSortOrder('priority');
  }
  
  sortOrder: string;

  simpleDrop($event: any, tileText: string) {
    if($event.dragData.list !== tileText){
      this.UpdateTask($event.dragData.id, tileText);  
    }
  }

  getBoardInfo() {
    this.tasksService.getBoard('1')
      .subscribe(
      board => this.board = board,
      err => {
        console.log(err);
      });
  }

  getTasks() {
    this.tasksService.getTasks('1')
    .subscribe(
      tasks => this.tasks = tasks,
      err => {
        console.log(err);
      });
  }

  setTaskstoTiles() {
    console.log(this.tasks);
    this.tiles.filter(function(tile){
        tile.tasks = this.tasks.filter(function(task){
          return task.list === tile.text;
        });
      });
  }

  UpdateTask(id, tList){
    this.tasksService.updateTask(id, tList)
    .subscribe(
      updatedTask => this.updatedTask =  updatedTask,
      err => {
        console.log(err);
      });
  }

  SetSortOrder(sortBy){
    this.sortOrder = sortBy;
  }

  showAddtask(_tiletext){
    this.tiles.filter(function(tile){
      if(tile.text === _tiletext){
        tile.add = !tile.add; 
      }
    });
  }

  addNewTask(_tiletext){
    console.log(this.data);
    this.tasksService.createTask('1', _tiletext, this.data.description, Moment(this.data.duedate).format("DD/MM/YYYY"), this.data.priority)
    .subscribe(newtask => this.newTask = newtask,
      err => {
        console.log(err);
      });
    this.showAddtask(_tiletext);
  }

  sortByPriority(_tiletext){
    this.tasks.sort(function(a, b){
         return a.priority - b.priority;
    });
  }

  sortByDate(_tiletext){
    this.tasks.sort(function(a, b){
          return +new Date(a.dueDate) - +new Date(b.dueDate);
    });
  }
}
