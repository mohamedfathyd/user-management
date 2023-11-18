import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserInnerComponent } from './components/user-inner/user-inner.component';
import { ClickOutsideDirective } from './directives/clickOutSide.directive';


@NgModule({
  declarations: [
    FooterComponent,
    TopBarComponent,
    UploadFileComponent,
    SideMenuComponent,
    UserInnerComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [
    FooterComponent,
    TopBarComponent,
    UploadFileComponent,
    SideMenuComponent,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    UserInnerComponent
  ]
})
export class SharedModule {
}
