import {NgModule} from '@angular/core';

import {AppCommonModule} from '../common/app-common.module';
import {AppEventListComponent} from './list/app-event-list.component';
import {AppEventListItemComponent} from './list/app-event-list-item.component';
import {AppEventRootComponent} from './app-event-root.component';

@NgModule({
    declarations: [
        AppEventListComponent,
        AppEventListItemComponent,
        AppEventRootComponent
    ],
    imports: [
        AppCommonModule
    ]
})
export class AppEventModule {

}
