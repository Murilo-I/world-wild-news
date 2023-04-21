import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
