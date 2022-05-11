import { Component, Input } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'third-component',
  templateUrl: './third.component.html',
})
export class ThirdComponent {
  count: number = 0;

  @Input() name: string;
  @Input() age: number;
  @Input() gender: boolean;

  constructor(private service: Service) {}

  addCount() {
    this.count++;
    this.service.addCount();
  }

  addDog() {
    this.service.addDog({
      name: this.name,
      age: this.age,
      gender: this.gender,
    });

    this.name = '';
    this.age = 0;
    this.gender = false;
  }
}
