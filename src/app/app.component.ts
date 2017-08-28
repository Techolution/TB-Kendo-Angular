import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kendo Labs!';
  color: string;
  colors: string[] = ['black', 'blue', 'burgundy', 'red', 'yellow', 'brown', 'tan', 'pink'];
}
