import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RouterLink } from '@angular/router';
import { GlobalState } from 'src/app/core/global/global-state';


@Component({
  selector: 'app-homeScreen',
  templateUrl: './homeScreen.component.html',
  styleUrls: ['./homeScreen.component.scss']
})
export class HomeScreenComponent extends GlobalState implements OnInit {
 constructor(route:ActivatedRoute,private router:Router) {
    super();
    }

  ngOnInit(): void {
  this.closeNotification
  }
  
}
