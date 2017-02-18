import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertModule, CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';

import { HighlightDirective } from './highlight.directive';

import { UserService } from './user.service';

@NgModule({
  imports: [BrowserModule, AlertModule.forRoot(), CarouselModule.forRoot()],
  declarations: [AppComponent, HighlightDirective, TitleComponent],
  providers : [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
