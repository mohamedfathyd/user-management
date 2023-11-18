
import { DatePipe } from '@angular/common';
import {Injectable} from '@angular/core';
import { ar } from 'src/lang/ar';
import { en } from 'src/lang/en';
import { Language } from '../../shared/enums/language';

@Injectable({
  providedIn: 'root',
})
export class GlobalState {
  constructor() {
    if (!localStorage.getItem("language")) localStorage.setItem("language", "en");
  }
  langaugeEnum=Language;
  public currentLanguage = localStorage.getItem("language") || this.langaugeEnum.ar;
  public language = this.currentLanguage == this.langaugeEnum.ar ? ar : en;
 public static appLoading = false;
 public static notifier = {
  shown: false,
  type: '',
  msg: '',
  subMsg: ''
};
public static confirm = {
  shown: false,
  msg: '',
  yesFn(){},
  noFn(){}
};
public static notification = {
  shown: false,
  msg: '',
  yesFn(){},
  noFn(){}
};
public static confirmInput = {
  shown: false,
  msg: '',
  input:'',
  yesFn(value){},
  noFn(){}
};
public static limitDialog = {
  shown: false,
  type: '',
  accountNumber:'',
  msg: [],
};
public static pdfDialog = {
  shown: false,
  type: '',
  pdfLink:'',
  msg: [],
};
public static detailsDialog = {
  shown: false,
  Transaction:null,
};
 
  public toggleLanguage() {
    if (this.language == en) {
      this.language = ar;
      localStorage.setItem("language", "ar");
    } else {
      this.language = en;
      localStorage.setItem("language", "en");
    }
    this.currentLanguage = localStorage.getItem("language") || this.langaugeEnum.ar;
  }
  public toggleLangToEnglish() {
    this.language = en;
    localStorage.setItem("language", "en");
    this.currentLanguage = this.langaugeEnum.en;
  }
  public toggleLangToArabic() {
    this.language = ar;
    localStorage.setItem("language", "ar");
    this.currentLanguage = this.langaugeEnum.ar;
  }
 
  public get isAppLoading() {
    return GlobalState.appLoading;
  }
  public set setAppLoading(value) {
    GlobalState.appLoading = value
  }
  public get notifier() {
    return GlobalState.notifier;
  }
  public set notifier(value) {
    GlobalState.notifier = Object.assign({}, GlobalState.notifier, value)
  }
  public closeNotifier() {
    this.notifier = Object.assign({}, GlobalState.notifier, {
      shown: false,
      type: '',
      msg: '',
      subMsg: ''
    })
  }
  public get confirm() {
    return GlobalState.confirm;
  }
  public set confirm(value) {
    GlobalState.confirm = Object.assign({}, GlobalState.confirm, value)
  }
  public closeConfrim(value) {
    this.confirm = Object.assign({}, GlobalState.confirm, {
      shown: false,
      msg: '',
    })
  value == true?this.confirm.yesFn():this.confirm.noFn()
  }
  public get confirmInput() {
    return GlobalState.confirmInput;
  }
  public set confirmInput(value) {
    GlobalState.confirmInput = Object.assign({}, GlobalState.confirmInput, value)
  }
  public closeConfrimInput(value,valueInput) {
    this.confirmInput = Object.assign({}, GlobalState.confirmInput, {
      shown: false,
      msg: '',
      input:'',
    })
  value == true?this.confirmInput.yesFn(valueInput):this.confirmInput.noFn()
  }
  public get limitDialog() {
    return GlobalState.limitDialog;
  }
  public set limitDialog(value) {
    GlobalState.limitDialog = Object.assign({}, GlobalState.limitDialog, value)
  }
  public closeLimitDialog() {
    this.limitDialog = Object.assign({}, GlobalState.limitDialog, {
      shown: false,
      type: '',
      msg: []
    })
  }
  public get pdfDialog() {
    return GlobalState.pdfDialog;
  }
  public set pdfDialog(value) {
    GlobalState.pdfDialog = Object.assign({}, GlobalState.pdfDialog, value)
  }
  public closePdfDialog() {
    this.pdfDialog = Object.assign({}, GlobalState.pdfDialog, {
      shown: false,
      type: '',
      msg: []
    })
  }
  public get detailsDialog() {
    return GlobalState.detailsDialog;
  }
  public set detailsDialog(value) {
    GlobalState.detailsDialog = Object.assign({}, GlobalState.detailsDialog, value)
  }
  public closeDetailsDialog() {
    this.detailsDialog = Object.assign({}, GlobalState.detailsDialog, {
      shown: false,
      Transaction:null
    })
  }
  public get notification() {
    return GlobalState.notification;
  }
  public set notification(value) {
    GlobalState.notification = Object.assign({}, GlobalState.notification, value)
  }
  public closeNotification() {
    this.notification = Object.assign({}, GlobalState.notification, {
      shown: false,
      msg: '',
    })
  }
  generatepdfName(name,datepipe:DatePipe){
    let date = new Date();
    const today = datepipe.transform(date, "yyyyMMddHHmmss");
    let pdfName =name+"_"+today+".xlsx"
    return pdfName;
}
}