import { CommandesComponent } from './pages/commandes/commandes.component';
import { UserDiscountComponent } from './pages/user/user-discount/user-discount.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModerationComponent } from './pages/admin-moderation/admin-moderation.component';


const routes: Routes = [
  {
    path: 'admin/moderation', component: AdminModerationComponent
  },
  {
    path: 'user/discount', component: UserDiscountComponent
  },
  {
    path: 'admin/commandes', component: CommandesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
