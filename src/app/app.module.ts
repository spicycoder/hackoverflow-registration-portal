import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Client, API_BASE_URL } from "./services/hackoverflow.service";

import { RegisteredIdeasComponent } from './registered-ideas/registered-ideas.component';
import { NewIdeasComponent } from './new-ideas/new-ideas.component';
import { environment } from 'src/environments/environment';

import { TabViewModule } from "primeng/tabview";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from "primeng/editor";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    RegisteredIdeasComponent,
    NewIdeasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TabViewModule,
    TableModule,
    CardModule,
    InputTextModule,
    EditorModule,
    ButtonModule
  ],
  providers: [
    Client,
    { provide: API_BASE_URL, useValue: environment.baseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
