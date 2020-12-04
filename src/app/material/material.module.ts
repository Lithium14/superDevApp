import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule
      } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';









@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,

   ],
  exports: [
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
