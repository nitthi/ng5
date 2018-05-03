import { Component } from '@angular/core';

import { TestService } from './test.service';
@Component({
  templateUrl: './test.component.html',
})
export class TestComponent {
  title = "Test Component";
  user:any = {};
  constructor(private testService: TestService){}
  getDetails() {
	  this.testService.getTests().subscribe(res => {
		 
	  });
  }
  save() {
    console.log("sjdfhj", this.user);
    this.testService.saveDetails(this.user).subscribe(res => {
      console.log("responses", res);
    })
  }
  ngOnInit() {
	  this.getDetails();
  }
}
