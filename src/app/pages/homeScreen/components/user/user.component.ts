import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../../core/global/global-state';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeScreenService } from '../../servcies/homeScreen.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends GlobalState implements OnInit {
  user;
  userCritria;
  loading = false;
  constructor(private router: Router, private fb: FormBuilder, private service: HomeScreenService) {
    super();
    this.setuserForm();
  }
  setuserForm() {
    this.userCritria = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getUser();
  }
  next() {
    this.router.navigate(['/homeScreen/admin/editUser'],
      { queryParams: { user: JSON.stringify(this.user) } })
  }
  getUser() {
    this.loading = true;
    this.service.getUserInfo().subscribe(
      (res) => {
        if (res?.data) {
          this.user = res.data;
          this.userCritria.controls['name'].setValue(this.user.name);
          this.userCritria.controls['email'].setValue(this.user.email);
          this.userCritria.controls['phone'].setValue(this.user.phone);
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
