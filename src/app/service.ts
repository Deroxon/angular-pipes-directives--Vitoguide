import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Dog } from './model/dog';
@Injectable()
export class Service {
  counter: number = 0;
  counter$ = new Subject<number>();

  dogList: Array<Dog> = [];
  dogList$ = new Subject<Array<Dog>>();

  addCount() {
    this.counter++;
    this.counter$.next(this.counter);
  }
  minusCount(value) {
    this.counter -= value;
    this.counter$.next(this.counter);
  }

  addDog(value) {
    this.dogList.push(value);
    this.dogList$.next(this.dogList);
  }

  subCount$(): Observable<number> {
    return this.counter$.asObservable();
  }

  subDogs$(): Observable<Array<Dog>> {
    return this.dogList$.asObservable();
  }
}
