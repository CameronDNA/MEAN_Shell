import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'ornamentum';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthenticationService } from './AuthenticationService.service';

const routes: Routes = [
  { path: '', component: HomeComponent }
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
    BrowserAnimationsModule,
    HttpClientModule,
    DataTableModule.forRoot(),
    RouterModule.forRoot(routes , {onSameUrlNavigation: 'reload'})
  ],
  exports:[
  ],
  providers: [
    AuthGuardService,
    HttpClientModule,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
