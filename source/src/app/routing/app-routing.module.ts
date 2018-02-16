import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {AppEventRootComponent} from '../event/app-event-root.component';
import {AppLayoutComponent} from '../layout/app-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'events',
                component: AppEventRootComponent
            },
            {
                path: '',
                redirectTo: 'events',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

const options: ExtraOptions = {
    useHash: false
};

@NgModule({
    imports: [
        RouterModule.forRoot(routes, options)
    ]
})
export class AppRoutingModule {

}
