import { Component, EventEmitter, Input, Output, input } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  // This input signal is read-only, which means we can't change its value from within the class
  // using a set() method like with regular signal properties
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  selectUser() {
    this.select.emit(this.user.id);
  }
}
