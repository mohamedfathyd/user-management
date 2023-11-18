import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

import { NotifierComponent } from './components/notifier/notifier.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptor } from './main.interceptor';
import { MaterialModule } from '../material.module';

import { NotificationComponent } from './components/notificaiton/notification.component';


@NgModule({
  declarations: [LoadingComponent,NotifierComponent,NotificationComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,MaterialModule,
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    DatePipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    NotifierComponent,
    NotificationComponent
  ]
})
export class CoreModule { }
