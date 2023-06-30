import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: ` <h2 class="country1">This is the county list</h2> `,
  styles: [
    `
      .country1 {
        color: red;
      }
    `,
  ],
})
export class CountryListComponent {}
