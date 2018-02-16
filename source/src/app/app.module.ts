import {NgModule} from '@angular/core';

import {AppLayoutComponent} from './layout/app-layout.component';
import {AppRootComponent} from './app-root.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {AppSharedModule} from './common/app-common.module';

@NgModule({
    declarations: [
        AppLayoutComponent,
        AppRootComponent
    ],
    imports: [
        AppRoutingModule,
        AppSharedModule
    ],
    bootstrap: [
        AppRootComponent
    ]
})
export class AppModule {

}
