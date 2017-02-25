import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ThemeModule } from './theme/theme.module'
import { PagesModule } from './pages/pages.module'


import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ThemeModule, PagesModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
