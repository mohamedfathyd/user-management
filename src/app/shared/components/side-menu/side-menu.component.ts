import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalState } from 'src/app/core/global/global-state';
import { HomeScreenService } from '../../../pages/homeScreen/servcies/homeScreen.service';
import { UserType } from '../../../pages/authentication/DTOs/IUserType';



@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent extends GlobalState implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  lang = localStorage.getItem("language");
  adminView = false;
  constructor(@Inject(DOCUMENT) document, private router: Router, private services: HomeScreenService) {
    super();
  }
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  ngOnInit(): void {

  }
  active = false;
  display(id, ida, idb) {
    if (localStorage.getItem("userType") == "admin") {
      this.adminView = true;
    }else this.adminView = false;
    if (document.getElementById(id).style.display == 'none') {
      document.getElementById(id).style.display = 'block';
      document.getElementById(ida).style.display = 'none';
      document.getElementById(idb).style.display = 'block';
    }
    else {
      document.getElementById(id).style.display = 'none';
      document.getElementById(ida).style.display = 'block';
      document.getElementById(idb).style.display = 'none';
    }
  }
  checkDefaultLanguage() {
    if (!localStorage.getItem("language")) localStorage.setItem("language", "en");
    this.currentLanguage = localStorage.getItem("language");
  }
}
