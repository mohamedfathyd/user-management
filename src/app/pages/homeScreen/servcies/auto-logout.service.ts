import { Router } from "@angular/router";
import { Injectable, NgZone } from "@angular/core";

const MINUTES_UNITL_AUTO_LOGOUT = 1; // in Minutes
const CHECK_INTERVALL = 1000; // in ms
const STORE_KEY = "lastAction";

@Injectable({
  providedIn: "root",
})
export class AutoLogoutService {
  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) {
    this.check();
    this.initListener();
    this.initInterval();
  }

  get lastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
  set lastAction(value) {
    localStorage.setItem(STORE_KEY, String(value));
  }

  initListener() {
    this.ngZone.runOutsideAngular(() => {
      document.body.addEventListener("click", () => this.reset());
    });
  }

  initInterval() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.check();
      }, CHECK_INTERVALL);
    });
  }

  reset() {
    this.lastAction = Date.now();
  }

  check() {
    const now = Date.now();
    const timeleft = this.lastAction + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    this.ngZone.run(() => {
      if (isTimeout && localStorage.getItem("token")) {
        this.router.navigate(['/']);
        localStorage.removeItem(STORE_KEY)
      }
    });
  }
}
