import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatOptionModule, MatRadioModule,
    MatSelectModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        RouterModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        RouterModule
    ]
})
export class AppCommonModule {

}
