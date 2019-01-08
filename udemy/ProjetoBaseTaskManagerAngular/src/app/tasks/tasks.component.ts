import { Component, OnInit } from '@angular/core';
import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  providers: [TaskService]
})


export class TasksComponent implements OnInit {

  public tasks: Task[];
  public selectedTask: Task;

  public constructor(private taskService: TaskService) { }


  public ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
