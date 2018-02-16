import {NgModule} from '@angular/core';

import {AppCommonModule} from './common/app-common.module';
import {AppEventModule} from './event/app-event.module';
import {AppLayoutComponent} from './layout/app-layout.component';
import {AppRootComponent} from './app-root.component';
import {AppRoutingModule} from './routing/app-routing.module';

@NgModule({
    declarations: [
        AppLayoutComponent,
        AppRootComponent
    ],
    imports: [
        AppCommonModule,
        AppEventModule,
        AppRoutingModule
    ],
    bootstrap: [
        AppRootComponent
    ]
})
export class AppModule {

}
