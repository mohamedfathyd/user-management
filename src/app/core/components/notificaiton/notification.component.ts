import { Component } from '@angular/core';
import { GlobalState } from '../../global/global-state';
import { DatePipe } from '@angular/common';
import { Language } from '../../../shared/enums/language';
@Component({
  selector: 'notification-dialog',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent extends GlobalState {
  openDialog = false;
  storageLanguage = localStorage.getItem('language');
  langaugeEnum=Language;
  alarmView:boolean;
  constructor(public datepipe:DatePipe) {
    super();
    if (localStorage.getItem('alarm') == 'true') {
      this.alarmView = true;
      localStorage.setItem('alarm', 'false');
    } else this.alarmView = false;
  }
  ngOnInit() {
    setTimeout(() => {
      this.openDialog = true;
     }, 10);
  }
  close() {
    this.openDialog = false;
    setTimeout(() => {
      this.closeNotification();
    }, 250);
  }
 
}
