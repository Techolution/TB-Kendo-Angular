import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private gridData: any[] = products;

  handleSelectionChange(selection) {
    console.log(selection);
  }

}
