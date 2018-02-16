import {NgModule} from '@angular/core';

import {AppCommonModule} from '../common';
import {AppEventListComponent} from './list/app-event-list.component';
import {AppEventListItemComponent} from './list/app-event-list-item.component';
import {AppEventRootComponent} from './app-event-root.component';
import {AppEventService} from './shared/app-event.service';

@NgModule({
    declarations: [
        AppEventListComponent,
        AppEventListItemComponent,
        AppEventRootComponent
    ],
    imports: [
        AppCommonModule
    ],
    providers: [
        AppEventService
    ]
})
export class AppEventModule {

}
