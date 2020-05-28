import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../Services/data-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  private tasksArray: any = [];
  private showForm = false;
  taskToUpdate: any =  {
    'id':'',
    'description': '',
    'status': '',
    'priority': '',
    'taskName': ''
  };
  // id:string;
  // description:string;
  // priority: string;
  // status: string;
  //taskForm: FormGroup;

  constructor(private taskService: DataService) { }
  ngOnInit() {
    // this.taskForm = new FormGroup({
    //   'id': new FormControl(null),
    //   'description': new FormControl(null),
    //   'priority': new FormControl(null),
    //   'status': new FormControl(null),
    // })
    this.fetchTasks();
  }

  fetchTasks () {
    this.tasksArray = [];
    this.taskService.fetchTasks().subscribe((tasks) => {
      console.log(tasks);
      let taskProps = Object.keys(tasks);
      for (let task of taskProps) { 
        tasks[task].name = task;
        this.tasksArray.push(tasks[task]);
      }
      if ( this.showForm ) {
        this.showForm = false;
      }
      console.log(this.tasksArray);
     });
  }

  addNew() {
    this.showForm = true;
  }

  submitForm(form) {
    console.log('In task comp',form);
    let reqData = {
      'id': form.value.id,
      'priority': form.value.priority,
      'description': form.value.description,
      'status': form.value.status
    }
    if(form.value.taskName === '' || form.value.taskName === undefined) {
      this.taskService.submitTask(reqData).subscribe((resp)=> {
        console.log(resp);
        this.fetchTasks();
      })
    } else {
      this.taskService.updateTask(reqData, form.value.taskName).subscribe((resp)=> {
        console.log(resp);
        this.fetchTasks();
      })
    }
    
  }

  removeTask(taskName) {
    this.taskService.removeTask(taskName).subscribe((resp)=> {
      console.log(resp);
      this.fetchTasks();
    })
  }

  updateTask(taskName) {
    this.taskService.getTask(taskName).subscribe((resp:any)=> {
      console.log('get task by name', resp);
      this.taskToUpdate = {
        'id': resp.id,
        'description': resp.description,
        'status': resp.status,
        'priority': resp.priority,
        'taskName': taskName
      }
      this.showForm = true;
    })
  }

}
