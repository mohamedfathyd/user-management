import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notif-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  view = false;
  currentYear = new Date().getFullYear();
  constructor() {}
  ngOnInit(){}
}
