import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  data = 'Milan Rawal';

  displayText: string = '';

  getValue() {
    return 'This is important';
  }
  getClick() {
    console.log('The button is clicked');
  }
  getRandom(name: any) {
    console.log('This is' + ' ' + name);
  }
  getData(val: string) {
    console.log(val);
  }

  getInputValue(value: string) {
    console.log(value);
    this.displayText = value;
  }

  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
