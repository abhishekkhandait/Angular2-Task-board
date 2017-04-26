import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() task;
  @Input() tileName;
  constructor() { }
  
  ngOnInit() {
  }
  

}
