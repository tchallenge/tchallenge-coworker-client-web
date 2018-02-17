import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {AppEvent} from './app-event.model';
import {AppEventSearchResultItem} from './app-event-search-result-item.model';

@Injectable()
export class AppEventService {

    private events: AppEvent[];

    constructor(private http: HttpClient) {
        this.init();
    }

    create(invoice: AppEvent): Observable<AppEvent> {
        return new Observable<AppEvent>(subscriber => {
            invoice.id = 'e-' + (this.events.length + 1);
            invoice.status = 'CREATED';
            this.events.push(invoice);
            subscriber.next(invoice);
            subscriber.complete();
        });
    }

    retrieve(id: string): Observable<AppEvent> {
        return new Observable<AppEvent>(subscriber => {
            const event = this.events.filter(e => e.id === id).pop();
            if (event) {
                subscriber.next(event);
                subscriber.complete();
            } else {
                subscriber.error();
            }
        });
    }

    retrieveSearchResult(): Observable<AppEventSearchResultItem[]> {
        return new Observable<AppEventSearchResultItem[]>(subscriber => {
            const data = this.events.map(v => this.mapSearchResultItem(v));
            subscriber.next(data);
            subscriber.complete();
        });
    }

    update(invoice: AppEvent): Observable<AppEvent> {
        return new Observable<AppEvent>(subscriber => {
            const event = this.events.filter(e => e.id === invoice.id).pop();
            if (event) {
                const index = this.events.indexOf(event);
                invoice.status = 'MODIFIED';
                this.events.splice(index, 1, invoice);
                subscriber.next(invoice);
                subscriber.complete();
            } else {
                subscriber.error();
            }
        });
    }

    updateStatus(invoice: AppEvent): Observable<AppEvent> {
        return new Observable<AppEvent>(subscriber => {
            const event = this.events.filter(e => e.id === invoice.id).pop();
            if (event) {
                event.status = invoice.status;
                subscriber.next(event);
                subscriber.complete();
            } else {
                subscriber.error();
            }
        });
    }

    private mapSearchResultItem(event: AppEvent): AppEventSearchResultItem {
        return {
            id: event.id,
            permalink: event.permalink,
            caption: event.caption,
            validFrom: event.validFrom,
            validUntil: event.validUntil,
            status: event.status
        };
    }

    private init(): void {
        this.events = [
            {
                id: 'e-1',
                permalink: 'joker2018',
                caption: 'Joker 2018',
                description: 'Крупнейшая ежегодная Java-конференция в России',
                validFrom: '2018-01-01',
                validUntil: '2019-01-01',
                status: 'APPROVED'
            }
        ];
    }
}
