import { Component } from '@angular/core';
import { GlobalState } from '../../global/global-state';

@Component({
    selector: 'notifier',
    templateUrl: './notifier.component.html',
    styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent extends GlobalState { }
