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

import { ViewGalleryComponent } from './views/view-gallery/view-gallery.component';
import { ViewPortfolioHomeComponent } from './views/view-portfolio/view-portfolio-home.component';
import { ViewWorkComponent } from './views/view-work/view-work.component';

import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { EducationComponent } from './components/education/education.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ModelObjComponent } from './components/solids/model-obj/model-obj.component';
import { GridComponent } from './components/grid/grid.component';
import { ModelComponent } from './components/solids/model/model.component';
import { CircleComponent } from './components/circle/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FormLayoutComponent,
    FooterComponent,
    ViewWorkComponent,
    ViewGalleryComponent,
    ViewPortfolioHomeComponent,
    EducationComponent,
    GalleryComponent,
    ParagraphComponent,
    GridComponent,
    ModelComponent,
    ModelObjComponent,
    CircleComponent,
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
