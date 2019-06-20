import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { rootReducer } from './store/root.reducer';
import { BookComponent } from './components/book/book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BookAddComponent } from './components/book-add/book-add.component';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from './store/book.effect';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookComponent,
    BookDetailsComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([BookEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
