import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) username!: string;

  isNewTaskOpen: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string): void {
    this.tasksService.removeTask(taskId);
  }

  onOpenNewTask(): void {
    this.isNewTaskOpen = true;
  }

  onCloseNewTask(): void {
    this.isNewTaskOpen = false;
  }

  onAddTask(newTask: NewTask): void {
    this.tasksService.addTask(newTask, this.userId);
    this.isNewTaskOpen = false;
  }
}
