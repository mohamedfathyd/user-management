import { Component, ElementRef, ViewChild, AfterContentChecked, AfterViewInit, Input }
  from '@angular/core';
import { GlobalState } from 'src/app/core/global/global-state';
import { UserService } from 'src/app/pages/authentication/services/user.service';
import { Language } from '../../enums/language';


@Component({
  selector: 'notif-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent extends GlobalState implements AfterViewInit, AfterContentChecked {
  @ViewChild('iconName') iconName: ElementRef;
  @ViewChild('actualIcon') actualIcon: ElementRef;
  @Input("noTitle") noTitle = false;
  storageLanguage=localStorage.getItem("language");
  customerName=`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
  headerLeft: string = 'menu';
  viewed=false;
  alarmView: boolean;
  langaugeEnum=Language;
  constructor( private userService: UserService) {
    super();
  }
  ngAfterViewInit(): void {
    this.setIconSrc();
  }
  ngAfterContentChecked(): void {
    if (!(this.actualIcon && this.iconName)) return;
    this.setIconSrc();
  }
  setIconSrc() {
    const element = this.iconName?.nativeElement,
      imageName = element?.childNodes[0].wholeText;
    this.actualIcon?.nativeElement.setAttribute("src", `assets/icons/${imageName}.svg`);
  }
  viewMenu(){
    this.viewed=!this.viewed;
  }
  clickedOutside(): void {
    this.viewed=false;
  }
  notificationPage(){
    this.alarmView=false;
    const that =this;
    this.notification={shown:true,msg:`${"maessage"}`,  yesFn() {}, noFn()  {}}
  }
  showSuccess(message) {}
}
