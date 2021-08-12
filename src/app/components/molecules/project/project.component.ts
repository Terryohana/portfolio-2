import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { globalSettings } from '../../../helpers/globalSettings';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

export type Project = {
  number: string;
  heading: string;
};

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {
  @ViewChild('filled') filled: ElementRef;
  @ViewChild('outlined') outlined: ElementRef;
  @ViewChild('line') line: ElementRef;

  @Input() project: Project;

  public titleFilled: HTMLElement;
  public titleOutlined: HTMLElement;
  public circle: any;

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
    this.initProject();
  }

  public initProject() {
    gsap.registerPlugin(DrawSVGPlugin);
    this.titleOutlined = this.outlined.nativeElement;
    this.titleFilled = this.filled.nativeElement;
    this.circle = this.line.nativeElement;
    gsap.set(this.titleOutlined, {
      yPercent: -this.settings.title.yPercent,
      opacity: 0,
      rotateX: this.settings.title.rotateX,
      skewX: this.settings.title.skewX,
    });
    gsap.set(this.circle, { drawSVG: false });
  }

  public showOutlinedTitle() {
    gsap.registerPlugin(DrawSVGPlugin);
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
    tl.to(this.circle, { drawSVG: true }, 0);
    return tl;
  }

  public showFilledTitle() {
    gsap.registerPlugin(DrawSVGPlugin);
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
    tl.to(this.circle, { drawSVG: false }, 0);
    return tl;
  }
}
