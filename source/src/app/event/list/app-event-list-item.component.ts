import {Component, Input} from '@angular/core';

import {AppEventListItem} from './app-event-list-item.model';

@Component({
    selector: 'app-event-list-item',
    templateUrl: './app-event-list-item.component.html',
    styleUrls: ['./app-event-list-item.component.css']
})
export class AppEventListItemComponent {

    @Input() item: AppEventListItem;
}
