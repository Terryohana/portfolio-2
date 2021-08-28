import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { ScrollNoticeComponent } from './components/atoms/scroll-notice/scroll-notice.component';
import { ProjectComponent } from './components/molecules/project/project.component';
import { BikeComponent } from './components/atoms/bike/bike.component';
import { TextSlideComponent } from './components/molecules/text-slide/text-slide.component';
import { TextSlideLineComponent } from './components/atoms/text-slide-line/text-slide-line.component';
import { DimComponent } from './components/atoms/dim/dim.component';
import { HeadingComponent } from './components/atoms/heading/heading.component';
import { ContactComponent } from './components/molecules/contact/contact.component';
import { OrbitComponent } from './components/atoms/orbit/orbit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ScrollNoticeComponent,
    ProjectComponent,
    BikeComponent,
    TextSlideComponent,
    TextSlideLineComponent,
    DimComponent,
    HeadingComponent,
    ContactComponent,
    OrbitComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
