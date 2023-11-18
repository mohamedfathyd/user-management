import { Component, OnInit } from '@angular/core';
import { HomeScreenService } from '../../../pages/homeScreen/servcies/homeScreen.service';
import { Language } from '../../../shared/enums/language';
import { GlobalState } from '../../global/global-state';

@Component({
  selector: 'pdf-dialog',
  templateUrl: './pdf-dialog.component.html',
  styleUrls: ['./pdf-dialog.component.scss']
})
export class PdfDialogComponent extends GlobalState implements OnInit {
  storageLanguage = localStorage.getItem('language');
  langaugeEnum=Language;
  finalPdf;
  constructor(private servcies:HomeScreenService) { 
    super();
  }

  ngOnInit(): void {
    this.finalPdf=this.pdfDialog.pdfLink;
  }
  close() {
    this.closePdfDialog();
  }
}
