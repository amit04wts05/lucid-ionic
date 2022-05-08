import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/layouts/main/main.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { PosComponent } from './pos.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component:PosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
