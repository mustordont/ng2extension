import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuickLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    DndModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    chrome.browserAction.onClicked.addListener(function(tab) {
      chrome.tabs.create({
          url: 'chrome://newtab'
      });
    });
  }
}
