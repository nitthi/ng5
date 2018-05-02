import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.routing';
import { CommonModule }  from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { TestComponent } from './test/test.component';
import { TestService } from './test/test.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [AppService,TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
