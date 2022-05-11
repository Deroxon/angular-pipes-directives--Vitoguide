import { Component, Input } from '@angular/core';
import { Service } from './service';
import { Dog } from './model/dog';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  totalCount: number = 0;
  dogList: Array<Dog> = [];

  color = 'yellow';

  constructor(private service: Service) {
    this.service.subCount$().subscribe((data) => {
      this.totalCount = data;
    });

    this.service.subDogs$().subscribe((data) => {
      this.dogList = data;
    });
  }
}
