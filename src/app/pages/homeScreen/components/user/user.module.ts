import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';


const routes: Routes = [
  { path: '', component: UserComponent },
];
@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedModule,CoreModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
