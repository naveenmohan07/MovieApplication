import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieInterceptor } from './shared/interceptor/movie.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MovieInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
