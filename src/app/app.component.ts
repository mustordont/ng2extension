import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchRequest: string = '';
  makeSearchRequest() {
    chrome.tabs.update({
        url: "http://go.mail.ru/search?q="+this.searchRequest
    });
  }
}
