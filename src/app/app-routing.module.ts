import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDashComponent } from './test-dash/test-dash.component';

const routes: Routes = [
  {path: '', component: TestDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
