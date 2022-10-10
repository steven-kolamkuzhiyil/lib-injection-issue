import { Injectable } from '@angular/core';
import { publicApiFunction } from '@stko/utility-module';

@Injectable({
  providedIn: 'root'
})
export class TestLibService {

  constructor() {
    publicApiFunction();
  }
}
