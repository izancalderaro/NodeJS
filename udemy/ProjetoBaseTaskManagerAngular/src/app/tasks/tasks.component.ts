import { Component, OnInit } from '@angular/core';
import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';




@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {

    public tasks: Task[];
    public selectedTask: Task;
    public service = new TaskService();


    public constructor() {
    }

    public ngOnInit() {
        this.tasks = this.service.getTasks();


    }

    /**
     * onSelect task:Task : void    */
    public onSelect(task: Task): void {
        this.selectedTask = task;
    }

}
