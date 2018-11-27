import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  list: number[]
  constructor() {
    this.list = [1,12,3,123]
  }

}
