import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  openNewTab(url) {
    chrome.tabs.create({
        url: url
    });
  }
}
