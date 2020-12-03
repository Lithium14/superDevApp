import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModerationComponent } from './pages/admin-moderation/admin-moderation.component';


const routes: Routes = [
  {
    path: 'admin/moderation', component: AdminModerationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
