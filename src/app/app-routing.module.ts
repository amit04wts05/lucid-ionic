import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/welcome/welcome.module').then( m => m.WelcomeModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./auth/authenticate/authenticate.module').then( m => m.AuthenticateModule)
  },
  {
    path: 'pos',
    loadChildren: () => import('./pages/pos/pos.module').then( m => m.PosModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
