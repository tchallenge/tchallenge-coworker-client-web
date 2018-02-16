import {NgModule} from '@angular/core';

import {AppCommonModule} from './common';
import {AppEventModule} from './event';
import {AppLayoutComponent} from './layout/app-layout.component';
import {AppRootComponent} from './app-root.component';
import {AppRoutingModule} from './routing';

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
