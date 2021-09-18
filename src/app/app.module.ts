import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import {ROUTES } from './routes/app.routes';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterMovieComponent } from './register-movie/register-movie.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterMovieComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES),ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
