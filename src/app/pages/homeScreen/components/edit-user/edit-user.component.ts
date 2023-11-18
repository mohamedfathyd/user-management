import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../../core/global/global-state';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent extends GlobalState implements OnInit {
  user;
  userCritria;
  constructor(private route: ActivatedRoute,private fb: FormBuilder,private location: Location ) {
    super();
    route.queryParams.subscribe(params => {
      this.user =JSON.parse((params.user));
    });
    this.setuserForm();
   }
   setuserForm() {
    this.userCritria = this.fb.group({
      name: [this.user?.name, [Validators.required,Validators.min(-1)]],
      email: [this.user?.email, [Validators.required,Validators.min(-1)]],
      phone: [this.user?.phone, [Validators.required,Validators.min(-1)]],
    });
  }
  ngOnInit(): void {
   
  }
  next() {
    this.notifier = {
      shown: true,
      msg: this.language.success,
      subMsg: '',
      type: 'success'
    };
    this.location.back();
  }
}
