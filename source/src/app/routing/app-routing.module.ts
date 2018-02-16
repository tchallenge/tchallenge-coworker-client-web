import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

import {AppLayoutComponent} from '../layout/app-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent
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
