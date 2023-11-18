import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DatePipe } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import {CoreModule} from './core/core.module';
import { OnlyNumberDirective } from './shared/directives/NumberOnly.directive';
import { SharedModule } from './shared/shared.module';

import { DateRangeServices } from './shared/servcies/dateRange.servcies';


@NgModule({
  declarations: [
    AppComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},DatePipe,DateRangeServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
