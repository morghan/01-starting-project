import { Component, EventEmitter, Input, Output, input } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // This input signal is read-only, which means we can't change its value from within the class
  // using a set() method like with regular signal properties
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
