import { Injectable } from '@angular/core';

import { type Task } from './task/task.model';
import { type NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const storageTasks = localStorage.getItem('tasks');

    if (storageTasks) {
      this.tasks = JSON.parse(storageTasks);
    }
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((dtask) => dtask.userId === userId);
  }

  addTask(newTask: NewTask, userId: string): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      ...newTask,
    });
    this.saveTasks();
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
}
