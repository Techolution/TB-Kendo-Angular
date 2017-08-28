import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  disabled: boolean = true;

  disabledToggleOpts: any = [ { label: 'disable' }, { label: 'enable' }];

  onButtonClick() {
      alert('Hello!');
  }

  onItemClicked(item) {
    this.disabled = item.label === 'enable' ? false : true;
  }

}
