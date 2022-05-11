import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'first-component',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  count: number = 0;

  constructor(private service: Service) {}

  addCount() {
    this.count++;
    this.service.addCount();
  }
}
