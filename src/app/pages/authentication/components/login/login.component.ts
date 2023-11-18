import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { GlobalState } from 'src/app/core/global/global-state';
import regex from 'src/app/shared/validators/regex';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from '../../DTOs/IUserType';



@Component({
  selector: 'notif-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends GlobalState implements OnInit {
  loginForm: FormGroup;
  loading = false;
  lang = localStorage.getItem('language');
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private aRoute: ActivatedRoute,
   ) {
    super();
    this.setLoginForm();
  }
  ngOnInit(): void {}
  setLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(regex.user)]],
      password: ['', [Validators.required, Validators.pattern(regex.password)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  validateForm() {
    if (this.loginForm.controls['username'].value == "user" &&
    this.loginForm.controls['password'].value=="user123")
      this.login(UserType.user);
    else if (this.loginForm.controls['username'].value == "admin" &&
    this.loginForm.controls['password'].value=="admin123") this.login(UserType.admin);
    else this.notifier = {
      shown: true,
      msg: this.language.error(""),
      subMsg: '',
      type: 'error',
    };
  }
  login(userType) {
    this.loading = true;
    let loginMethod;
    userType == UserType.admin ?
      loginMethod = this.userService.adminLogin(this.loginForm.value):
      loginMethod = this.userService.userLogin(this.loginForm.value)
      loginMethod.subscribe(
      (res) => {
        if (res.success) {
          localStorage.setItem('userToken', res.data.token);
          localStorage.setItem('firstName', res.data.firstName);
          localStorage.setItem('lastName', res.data.lastName);
          localStorage.setItem('userName', res.data.username);
          localStorage.setItem("refresh_token", res.data.refreshToken);
          localStorage.setItem("userType",res.data.type)
          this.loginForm.reset();
          if(userType==UserType.user) 
            this.router.navigate(['/homeScreen/user']);
          else
          this.router.navigate(['/homeScreen/admin']);
        } else
          this.notifier = {
            shown: true,
            msg: res.description,
            subMsg: '',
            type: 'error',
          };
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }
}
