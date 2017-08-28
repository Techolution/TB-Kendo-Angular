import { Component } from '@angular/core';
import { products } from './products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  value: any;

  public data: any[] = [
    936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007
  ];

  settingData: any = [ { label: 'username' }, { label: 'theme' }];

  sort: any;

  private gridData: any[] = products;

  onButtonClick() {
      this.title = 'Hello from Kendo UI!';
  }

  onItemClicked(item) {
    console.log(item.label);
  }

  sortChange(event) {
    this.sort = event;
    console.log(event);
  }

  handleSelectionChange(selection) {
    console.log(selection);
  }

}
