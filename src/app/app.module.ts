import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OneComponent } from 'src/one/one.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, OneComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
