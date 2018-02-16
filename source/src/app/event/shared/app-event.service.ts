import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppEventSearchResultItem} from './app-event-list-item.model';

@Injectable()
export class AppEventService {

    constructor(private http: HttpClient) {

    }

    search(): Observable<AppEventSearchResultItem[]> {
        return new Observable<AppEventSearchResultItem[]>(subscriber => {
            const data = this.mockSearchResults();
            subscriber.next(data);
            subscriber.complete();
        });
    }

    private mockSearchResults(): AppEventSearchResultItem[] {
        return [
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
