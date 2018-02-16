import {Component, OnInit} from '@angular/core';
import {AppEventSearchResultItem} from '../shared/app-event-list-item.model';
import {AppEventService} from '../shared/app-event.service';

@Component({
    selector: 'app-event-list',
    templateUrl: './app-event-list.component.html',
    styleUrls: ['./app-event-list.component.css']
})
export class AppEventListComponent implements OnInit {

    items: AppEventSearchResultItem[];

    constructor(private appEventService: AppEventService) {

    }

    ngOnInit(): void {
        this.appEventService.search().subscribe(items => this.items = items);
    }
}
