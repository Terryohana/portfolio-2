import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { globalSettings } from '../../../helpers/globalSettings';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {
  @ViewChild('filled') filled: ElementRef;
  @ViewChild('outlined') outlined: ElementRef;

  public titleFilled: HTMLElement;
  public titleOutlined: HTMLElement;

  public settings = {
    title: {
      duration: 0.75,
      ease: `${globalSettings.ease}.inOut`,
      opacity: 1,
      yPercent: 100,
      rotateX: 90,
      skewX: 40,
    },
  };

  ngAfterViewInit() {
    this.titleOutlined = this.outlined.nativeElement;
    this.titleFilled = this.filled.nativeElement;
    this.initProject();
  }

  public initProject() {
    gsap.set(this.titleOutlined, {
      yPercent: -this.settings.title.yPercent,
      opacity: 0,
      rotateX: this.settings.title.rotateX,
      skewX: this.settings.title.skewX,
    });
  }

  public showOutlinedTitle() {
    const tl = gsap.timeline({
      defaults: {
        ease: this.settings.title.ease,
        duration: this.settings.title.duration,
      },
    });
    tl.to(this.titleFilled, {
      yPercent: this.settings.title.yPercent,
    });
    tl.to(
      this.titleFilled,
      {
        opacity: 0,
        rotateX: -this.settings.title.rotateX,
        skewX: -this.settings.title.skewX,
      },
      0
    );
    tl.to(
      this.titleOutlined,
      {
        yPercent: 0,
        opacity: this.settings.title.opacity,
        rotateX: 0,
        skewX: 0,
      },
      0
    );
    return tl;
  }

  public showFilledTitle() {
    const tl = gsap.timeline({
      defaults: {
        duration: this.settings.title.duration,
        ease: this.settings.title.ease,
      },
    });
    tl.to(this.titleFilled, {
      yPercent: 0,
      opacity: this.settings.title.opacity,
      rotateX: 0,
      skewX: 0,
    });
    tl.to(
      this.titleOutlined,
      {
        yPercent: -this.settings.title.yPercent,
        opacity: 0,
        rotateX: this.settings.title.rotateX,
        skewX: this.settings.title.skewX,
      },
      0
    );
    return tl;
  }
}
