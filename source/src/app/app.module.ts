import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppSharedModule} from './common/app-common.module';

@NgModule({
    declarations: [
        AppComponent
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
