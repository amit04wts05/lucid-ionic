import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/welcome/welcome_module').then( m => m.WelcomeModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./auth/authenticate/authenticate_module').then( m => m.AuthenticateModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard_module').then( m => m.DashboardModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search_result/search_result_module').then( m => m.SearchResultModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
