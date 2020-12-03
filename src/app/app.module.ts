import { MatDialogModule, MatDialogRef  } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModerationComponent } from './pages/admin-moderation/admin-moderation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AdminUserFormComponent } from './pages/admin-user-form/admin-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDiscountComponent } from './pages/user/user-discount/user-discount.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { CommandeCardComponent } from './components/commande-card/commande-card.component';
import { CommandeDetailComponent } from './components/commande-detail/commande-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminModerationComponent,
    AdminUserFormComponent,
    NavbarComponent,
    UserDiscountComponent,
    CommandesComponent,
    CommandeCardComponent,
    CommandeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  entryComponents: [AdminUserFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
