import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from 'src/app/core/global/global-state';
import { HomeScreenService } from '../../../pages/homeScreen/servcies/homeScreen.service';
import { Language } from '../../enums/language';
import { GlobalConstants } from '../../global/global-constants';


@Component({
  selector: 'app-user-inner',
  templateUrl: './user-inner.component.html',
  styleUrls: ['./user-inner.component.scss']
})
export class UserInnerComponent extends GlobalState implements OnInit, OnDestroy {
  storageLanguage = localStorage.getItem("language");
  langaugeEnum=Language;
  constructor(@Inject(DOCUMENT) document, private router: Router,
    private services: HomeScreenService) {
    super();
  }
  customerName=`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
  ngOnInit(): void {}

  logout() {}

  selectLanguage(language: string) {}

  setLanguage(language: string) {
  }

  ngOnDestroy() {
   }
  logOut(){
   localStorage.removeItem('userToken');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('userName');
      this.router.navigate(['/']);
  }
  changelanguage(){
    if(localStorage.getItem("language")=='ar'){
     this.setLangToEnglish()
    }
    else this.setLangToArabic()
   }
   checkDefaultLanguage() {
     if (!localStorage.getItem("language")) localStorage.setItem("language", "en");
     this.currentLanguage = localStorage.getItem("language");
   }
   
   setLangToEnglish() {
     GlobalConstants.toggleLangToEnglish();
     document.dir = 'rtl';
     location.reload()
   }
   setLangToArabic() {
     GlobalConstants.toggleLangToArabic();
     document.dir = 'ltr';
     location.reload()
   }
}
