import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tlib-test-lib',
  template: `
    <p>
      test-lib works!
    </p>
  `,
  styles: [
  ]
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
