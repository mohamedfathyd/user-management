import { Component } from '@angular/core';
import { GlobalState } from './core/global/global-state';
import { AutoLogoutService } from './pages/homeScreen/servcies/auto-logout.service';
import { Language } from './shared/enums/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends GlobalState {
  title = 'frontendTemplete';
  sidebarExpanded = true;
  storageLanguage = localStorage.getItem("language");
  langaugeEnum=Language;
  constructor(
    autoLogout: AutoLogoutService  ) {
    super();
    autoLogout;
  }
}
