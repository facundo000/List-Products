import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-de-productos';
  
  showList = false;
  

  toggleList() {
    this.showList = !this.showList;
  } 

}
