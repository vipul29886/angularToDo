import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgForm, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-task-from',
  templateUrl: './task-from.component.html',
  styleUrls: ['./task-from.component.css']
})
export class TaskFromComponent implements OnInit {

  @ViewChild('f') taskForm: NgForm;

  @Input() taskToUpdate: any = {
    'id':'',
    'description': '',
    'status': '',
    'priority': '',
    'taskName': ''
  };
  @Output() ngSubmit = new EventEmitter(); // event when file starts uploading

  constructor() { 
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.taskForm);
    this.ngSubmit.emit(this.taskForm)
  }


}
