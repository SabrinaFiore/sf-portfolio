import { ViewContactComponent } from './views/view-contact/view-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewGalleryComponent } from './views/view-gallery/view-gallery.component';
import { ViewPortfolioHomeComponent } from './views/view-portfolio/view-portfolio-home.component';
import { ViewWorkComponent } from './views/view-work/view-work.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    data: { title: 'sabrina fiore portfolio' },
    component: ViewPortfolioHomeComponent,
  },
  {
    path: 'view-work',
    component: ViewWorkComponent,
  },
  {
    path: 'view-gallery',
    component: ViewGalleryComponent,
  },
  {
    path: 'view-contact',
    component: ViewContactComponent,
  },
];

console.log('[debug] Routes', AppRoutes)
@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
