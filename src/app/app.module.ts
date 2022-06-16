import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ViewLandingComponent } from './views/view-landing/view-landing.component';
import { ViewWorkComponent } from './views/view-work/view-work.component';
import { ViewGalleryComponent } from './views/view-gallery/view-gallery.component';

import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { EducationComponent } from './components/education/education.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ViewWorkTwoComponent } from './views/view-work-two/view-work.component';
import { ReactComponentsComponent } from './components/react-components/react-components.component';
import { SphereComponent } from './components/solids/sphere/sphere.component';
import { GridComponent } from './components/grid/grid.component';
import { SolidWhitImgComponent } from './components/solids/solid-whit-img/solid-whit-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FormLayoutComponent,
    FooterComponent,
    ViewLandingComponent,
    ViewWorkComponent,
    ViewWorkTwoComponent,
    ViewGalleryComponent,
    EducationComponent,
    GalleryComponent,
    ParagraphComponent,
    ReactComponentsComponent,
    SphereComponent,
    GridComponent,
    SolidWhitImgComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
