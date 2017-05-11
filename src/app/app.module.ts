import { BrowserModule } from '@angular/platform-browser';
import {NgModule, enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortariaModule } from '../portaria/portaria.module';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

const appRoutes : Routes = [
  {path: '', redirectTo: '/portaria', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortariaModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
