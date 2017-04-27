import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<AddTaskComponent>) { }
  
  ngOnInit() {
  }

}
