import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppSharedModule} from './common/app-common.module';
import {AppLayoutComponent} from './layout/app-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        AppLayoutComponent
    ],
    imports: [
        AppSharedModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
