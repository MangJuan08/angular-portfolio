import { ResolverService } from './../services/resolver.service';
import { CardComponent } from './../components/card/card.component';
import { MaterialModule } from './material.module';
import { PortfolioComponent } from './../pages/portfolio/portfolio.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
