import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './authentication.routing';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserService } from './services/user.service';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    UserService,
  ]
})
export class AuthenticationModule { }
