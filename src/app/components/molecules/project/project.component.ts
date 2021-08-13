import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { globalSettings } from '../../../helpers/globalSettings';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { mapElements } from '../../../helpers/mapElements';

export type Project = {
  number: string;
  heading: string;
  borderTop?: 'project--border-top';
};

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {
  @ViewChild('filled') filled: ElementRef;
  @ViewChild('outlined') outlined: ElementRef;
  @ViewChild('circleLineRef') circleLineRef: ElementRef;
  @ViewChildren('arrowLineRef') arrowLineRefs: QueryList<ElementRef>;

  @Input() project: Project;

  public titleFilled: HTMLElement;
  public titleOutlined: HTMLElement;
  public circle: any;
  public arrowLines: any;

  public settings = {
    duration: 0.75,
    ease: `${globalSettings.ease}.inOut`,
    opacity: 1,
    yPercent: 100,
    rotateX: 90,
    skewX: 40,
  };

  ngAfterViewInit() {
    this.initProject();
  }

  public initProject() {
    gsap.registerPlugin(DrawSVGPlugin);
    this.titleOutlined = this.outlined.nativeElement;
    this.titleFilled = this.filled.nativeElement;
    this.circle = this.circleLineRef.nativeElement;
    this.arrowLines = mapElements(this.arrowLineRefs);
    gsap.set(this.titleOutlined, {
      yPercent: -this.settings.yPercent,
      opacity: 0,
      rotateX: this.settings.rotateX,
      skewX: this.settings.skewX,
    });
    gsap.set(this.circle, { drawSVG: false });
    gsap.set(this.arrowLines, { drawSVG: false });
  }

  public showBack() {
    gsap.registerPlugin(DrawSVGPlugin);
    const tl = gsap.timeline({
      defaults: {
        ease: this.settings.ease,
        duration: this.settings.duration,
      },
    });
    tl.to(this.circle, { drawSVG: true });
    tl.to(
      this.titleFilled,
      {
        opacity: 0,
        yPercent: this.settings.yPercent,

        rotateX: -this.settings.rotateX,
        skewX: -this.settings.skewX,
      },
      0
    );
    tl.to(
      this.titleOutlined,
      {
        yPercent: 0,
        opacity: this.settings.opacity,
        rotateX: 0,
        skewX: 0,
      },
      0
    );
    tl.to(
      this.arrowLines,
      {
        drawSVG: true,
        ease: this.settings.ease,
        opacity: 1,
      },
      0
    );
    return tl;
  }

  public showFront() {
    gsap.registerPlugin(DrawSVGPlugin);
    const tl = gsap.timeline({
      defaults: {
        duration: this.settings.duration,
        ease: this.settings.ease,
      },
    });
    tl.to(this.circle, { drawSVG: false });
    tl.to(
      this.titleFilled,
      {
        yPercent: 0,
        opacity: this.settings.opacity,
        rotateX: 0,
        skewX: 0,
      },
      0
    );
    tl.to(
      this.titleOutlined,
      {
        yPercent: -this.settings.yPercent,
        opacity: 0,
        rotateX: this.settings.rotateX,
        skewX: this.settings.skewX,
      },
      0
    );
    tl.to(
      this.arrowLines,
      {
        drawSVG: false,
        ease: `${globalSettings.ease}.out`,
        opacity: 0,
      },
      0
    );
    return tl;
  }
}
