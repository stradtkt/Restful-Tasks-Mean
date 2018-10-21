import { Task } from './../../models/task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task = new Task();
  tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  onRemove(task: Task) {
    this.taskService.removeTask(task._id)
      .subscribe(removeTask => {
        this.tasks = this.tasks.filter(t => t._id !== removeTask._id);
      });
  }

}
