import {Component, OnInit} from '@angular/core';
import {AppEventListItem} from './app-event-list-item.model';

@Component({
    selector: 'app-event-list',
    templateUrl: './app-event-list.component.html',
    styleUrls: ['./app-event-list.component.css']
})
export class AppEventListComponent implements OnInit {

    items: AppEventListItem[];

    ngOnInit(): void {
        this.items = [
            {
                id: '1',
                permalink: 'joker2018',
                title: 'Joker 2018',
                description: 'Крупнейшая ежегодная Java-конференция в России',
                validFrom: '2018-01-01',
                validUntil: '2019-01-01',
                status: 'APPROVED'
            }
        ];
    }
}
