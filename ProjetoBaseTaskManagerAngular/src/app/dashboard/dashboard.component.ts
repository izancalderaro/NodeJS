import { Component } from '@angular/core';
import { TaskService } from 'app/tasks/shared/task.service';
import { Task } from 'app/tasks/shared/task.model';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent{

  public tasks: Task[];
  /**
 * constructor
 */
    public constructor(private taskService: TaskService) {
    // this.taskService.getTasks().then((tasks) => console.log(tasks));
    }

  /**
   * ngOnInit
   */
    public ngOnInit() {
      this.taskService.getImportantTasks()
        .then((tasks) => this.tasks = tasks);
      }

}

