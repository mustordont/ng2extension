import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {
    public topSites: any[] = [];

    constructor(private ref: ChangeDetectorRef){}

    ngOnInit() {
        let topSites = localStorage.getItem('topSites');
        if (topSites) {
            this.topSites = JSON.parse( topSites );
        } else {
            chrome.topSites.get( res => {
                this.topSites = this.getFiltered(res);
                this.ref.detectChanges();
            });
        }
    }

    updateUserTopSites() {
        localStorage.setItem('topSites', JSON.stringify(this.topSites));
    }

    getFiltered(arr) {
        return arr.filter((item, index) => {
            return index < 8;
        }).map(item => {
            item.domain = (item.url).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?[^:\/\n]+/im)[0];
            return item;
        });
    }

    goToURL(url) {
        chrome.tabs.update({
            url: url
        });
    }
}
