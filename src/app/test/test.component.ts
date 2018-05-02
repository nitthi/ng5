import { Component } from '@angular/core';

import { TestService } from './test.service';
@Component({
  templateUrl: './test.component.html',
})
export class TestComponent {
  title = "Test Component";
  constructor(private testService: TestService){}
  getDetails() {
	  this.testService.getTests().subscribe(res => {
		 console.log("res", res); 
	  });
  }
  ngOnInit() {
	  this.getDetails();
  }
}
