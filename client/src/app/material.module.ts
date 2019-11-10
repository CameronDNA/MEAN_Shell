import {Injectable, NgModule} from "@angular/core";
import {MatButtonModule, MatFormFieldModule, MatNativeDateModule, MatTreeModule} from "@angular/material";
import {MatIconModule} from "@angular/material";
import {MatSidenavModule} from "@angular/material";
import {MatInputModule} from "@angular/material";
import {MatCheckboxModule} from "@angular/material";
import {MatSelectModule} from "@angular/material";
import {MatAutocompleteModule} from "@angular/material";
import {MatDatepickerModule} from "@angular/material";
import {MatRadioModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from "@angular/material";
import {MatListModule} from "@angular/material";

@NgModule({
  imports:[
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatTreeModule
  ],
  exports:[
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatTreeModule
  ]
})

export class MaterialDesign {}

