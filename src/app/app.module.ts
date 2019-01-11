import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FunctionsComponent } from './components/containers/functions/functions.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { StartCraftComponent } from './components/containers/start-craft/start-craft.component';
import { ObjectsComponent } from './components/containers/objects/objects.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/containers/dashboard/dashboard.component';
import { CardComponent } from './components/shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FunctionsComponent,
    StartCraftComponent,
    ObjectsComponent,
    DashboardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
