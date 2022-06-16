import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewGalleryComponent } from './views/view-gallery/view-gallery.component';

import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewLandingComponent } from './views/view-landing/view-landing.component';
import { ViewWorkTwoComponent } from './views/view-work-two/view-work.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: ViewLandingComponent,
  },
  {
    path: 'view-home',
    component: ViewHomeComponent,
  },
  {
    path: 'view-work-two',
    component: ViewWorkTwoComponent,
  },
  {
    path: 'view-gallery',
    component: ViewGalleryComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
