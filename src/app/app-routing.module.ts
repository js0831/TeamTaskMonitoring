import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuard } from './shared/services/authentication.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule) },
  {
    path: 'task',
    canActivate: [ AuthenticationGuard ],
    loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
