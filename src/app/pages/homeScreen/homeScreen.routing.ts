import { Routes } from '@angular/router';
import { HomeScreenComponent } from './homeScreen/homeScreen.component';

export const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
];
