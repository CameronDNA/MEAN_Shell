import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'ornamentum';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import {HttpModule} from '@angular/http';
import {MaterialDesign} from "./material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: HomeComponent ,runGuardsAndResolvers: 'always' }
];

@NgModule({
  declarations: [
   AppComponent,
   HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MaterialDesign,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTableModule.forRoot(),
    RouterModule.forRoot(routes , {onSameUrlNavigation: 'reload'})
  ],
  exports:[
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
