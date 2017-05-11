/**
 * Created by root on 27/04/17.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortariaComponent } from  './portaria.component';
import { PortariaViewComponent } from './portaria-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AppHttpService } from '../app/app-http.service';
const appRoutes : Routes = [
    { path: 'portaria', component: PortariaComponent },
    { path: 'portaria/:id', component: PortariaViewComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
     ],
    declarations: [
        PortariaComponent,
        PortariaViewComponent
    ],
    providers:[
        AppHttpService
    ]

})
export class PortariaModule{}