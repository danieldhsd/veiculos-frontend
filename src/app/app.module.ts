import { CarrosService } from './carros.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [HttpClientModule, CarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
