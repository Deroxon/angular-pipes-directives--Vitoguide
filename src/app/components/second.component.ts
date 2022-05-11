import { Component, Input } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'second-component',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  count: number = 0;
  @Input() toMinus: number = 0;

  constructor(private service: Service) {}

  addCount() {
    this.count++;
    this.service.addCount();
  }

  minusCount() {
    this.count -= this.toMinus;
    this.service.minusCount(this.toMinus);
    this.toMinus = 0;
  }
}
