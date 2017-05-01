import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

import { BoardModel } from '../../models/board-model';

@Component({
  selector: 'app-content',
  providers: [TasksService],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  boards: BoardModel[];

  constructor( private taskService: TasksService ) {}

  ngOnInit(){
    this.getBoards();
  }

  getBoards() {
    this.taskService.getBoards()
    .subscribe(
      boards => this.boards = boards,
      err => console.log(err)
    );
  }
}
