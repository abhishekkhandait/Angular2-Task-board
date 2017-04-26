import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { BoardModel } from '../models/board-model';
import { TaskModel } from '../models/task-model';

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
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.getBoardInfo();
    this.getTasks();
  }

  tiles = [
    { text: 'New', cols: 1, rows: 1.8, color: '#222' },
    { text: 'On-Hold', cols: 1, rows: 1.8, color: '#222' },
    { text: 'In-Progress', cols: 1, rows: 1.8, color: '#222' },
    { text: 'Done', cols: 1, rows: 1.8, color: '#222' },
  ];

  simpleDrop($event: any, tileText: string) {
    if($event.dragData.list !== tileText){
      this.UpdateTask($event.dragData.boardId, $event.dragData.list, tileText);  
    }
    console.log($event.dragData);
    console.log(tileText);
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

  UpdateTask(id, sList, tList){
    console.log('PatchStart');
    this.tasksService.updateTask(id, sList, tList)
    .subscribe(
      updatedTask => this.updatedTask =  updatedTask,
      err => {
        console.log(err);
      });
  }
}
