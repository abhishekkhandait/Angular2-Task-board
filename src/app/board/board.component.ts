import { Component, OnInit, Input } from '@angular/core';
import { AddTaskComponent } from '../board/shared/add-task/add-task.component';
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
  @Input() boardid: string;

  constructor(
    private tasksService: TasksService,
    public dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.getBoardInfo();
    this.getTasks();
    this.SetSortOrder('priority');
  }

  tiles = [
    { text: 'New', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#03A9F4' },
    { text: 'On-Hold', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#f5c942' },
    { text: 'In-Progress', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#d066e2' },
    { text: 'Done', cols: 1, rows: 1.75, color: '#CFD8DC', titlecolor: '#ff6b68' },
  ];

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

  getTasks(){
    this.tasksService.getTasks('1')
    .subscribe(
      tasks => this.tasks = tasks,
      err => {
        console.log(err);
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

  addTask(){
    let newTaskBox = this.dialog.open(AddTaskComponent);
    newTaskBox.afterClosed().subscribe(result => {
      this.boardid = result;
    });
    }
}
