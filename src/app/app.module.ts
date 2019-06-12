import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Client, API_BASE_URL } from "./services/hackoverflow.service";
import { environment } from 'src/environments/environment';

import { ChartModule } from "primeng/chart";

import { TabViewModule } from "primeng/tabview";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from "primeng/editor";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";
import { DialogModule } from "primeng/dialog";
import { AccordionModule } from "primeng/accordion";
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TabViewModule,
    TableModule,
    CardModule,
    InputTextModule,
    EditorModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    AccordionModule,
    ChartModule,
    PaginatorModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    Client,
    { provide: API_BASE_URL, useValue: environment.baseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
