import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ViewLandingComponent } from './views/view-landing/view-landing.component';
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
import { ModelComponent } from './components/solids/model/model.component';
import { ViewModelComponent } from './views/view-model/view-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FormLayoutComponent,
    FooterComponent,
    ViewLandingComponent,
    ViewWorkTwoComponent,
    ViewGalleryComponent,
    EducationComponent,
    GalleryComponent,
    ParagraphComponent,
    ReactComponentsComponent,
    SphereComponent,
    GridComponent,
    SolidWhitImgComponent,
    ModelComponent,
    ViewModelComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
