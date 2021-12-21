import { ResolverService } from './../services/resolver.service';
import { PortfolioComponent } from './../pages/portfolio/portfolio.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PortfolioComponent, resolve: {
    user: ResolverService
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
