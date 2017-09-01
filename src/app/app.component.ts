import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { GridDataService } from './gridData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private gridData: any[];

  constructor(private gridDataService: GridDataService) {

  }

  handleSelectionChange(selection) {
    console.log(selection);
  }


  ngOnInit() {
    this.gridDataService.getProducts().subscribe( 
      ( res ) => { this.gridData = res; }
    );
  }

}
