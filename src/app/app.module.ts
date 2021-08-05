import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { NameComponent } from './components/atoms/name/name.component';
import { ScrollNoticeComponent } from './components/atoms/scroll-notice/scroll-notice.component';
import { WorkComponent } from './components/organisms/work/work.component';
import { ProjectComponent } from './components/molecules/project/project.component';
import { AboutComponent } from './components/organisms/about/about.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { TextSlideComponent } from './components/molecules/text-slide/text-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    LogoComponent,
    NameComponent,
    ScrollNoticeComponent,
    WorkComponent,
    ProjectComponent,
    AboutComponent,
    FooterComponent,
    TextSlideComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
