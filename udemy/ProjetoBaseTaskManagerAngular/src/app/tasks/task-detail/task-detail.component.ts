import { Component } from "@angular/core";
import { Task } from "../shared/task.model";

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent {
    public task: Task;

    public constructor() {}

}