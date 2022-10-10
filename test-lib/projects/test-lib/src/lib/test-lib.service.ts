import { Injectable } from '@angular/core';
import { publicApiFunction } from 'spa-utility-module/dist/stko-utility-module';

@Injectable({
  providedIn: 'root'
})
export class TestLibService {

  constructor() {
    publicApiFunction();
  }
}
