import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { Board } from 'src/app/models/board';
import { Column } from 'src/app/models/column';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  public board = new Board('Board 1', [
    new Column('To do', ['Eat lunch', 'Pick up groceries', 'Go home']),
    new Column('In Progress', ['Get to work']),
    new Column('Done', ['Have Breakfast']),
  ]);
  ngOnInit(): void {}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
