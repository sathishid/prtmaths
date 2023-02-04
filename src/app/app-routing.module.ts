import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsdmComponent } from './asdm/asdm.component';

const routes: Routes = [
  { path: '', redirectTo: 'asdm',pathMatch: 'full' },
  { path: 'asdm', component: AsdmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
