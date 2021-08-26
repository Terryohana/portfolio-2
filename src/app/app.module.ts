import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { ScrollNoticeComponent } from './components/atoms/scroll-notice/scroll-notice.component';
import { WorkComponent } from './components/organisms/work/work.component';
import { ProjectComponent } from './components/molecules/project/project.component';
import { AboutComponent } from './components/organisms/about/about.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { TextSlideComponent } from './components/molecules/text-slide/text-slide.component';
import { TextSlideLineComponent } from './components/atoms/text-slide-line/text-slide-line.component';
import { DimComponent } from './components/atoms/dim/dim.component';
import { HeadingComponent } from './components/atoms/heading/heading.component';
import { ContactComponent } from './components/molecules/contact/contact.component';
import { CyclistComponent } from './components/atoms/cyclist/cyclist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ScrollNoticeComponent,
    WorkComponent,
    ProjectComponent,
    AboutComponent,
    FooterComponent,
    TextSlideComponent,
    TextSlideLineComponent,
    DimComponent,
    HeadingComponent,
    ContactComponent,
    CyclistComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
