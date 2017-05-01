import { Component, OnInit, Input, trigger, state, animate, keyframes, style, transition } from '@angular/core';

@Component({
  selector: 'app-board-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateY(0)'})),
    transition('void => *', [
      animate(500, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ])
  ])
]
})
export class TaskCardComponent implements OnInit {
  @Input() task;
  @Input() tileName;
  constructor() { }
  
  ngOnInit() {
  }
  

}
