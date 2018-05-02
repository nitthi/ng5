import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isToggle:boolean;
  toggleContent(data) {
    this.isToggle = data;
  }
}
