import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { globalSettings } from '../../../helpers/globalSettings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerMask') headerMaskRef: ElementRef;
  // logo
  public logoBg: HTMLElement;
  // name
  public nameText: HTMLElement;
  public nameLine: HTMLElement;
  // header line slide
  public textLines: HTMLElement[];
  public textFilledFaces: HTMLElement[];
  public textOutlinedFaces: HTMLElement[];
  // scroll notice
  public scrollText: HTMLElement;
  public scrollIcon: HTMLElement;
  // header mask
  public headerMask: HTMLElement;
  // animation
  public localSettings = {
    slide: {
      duration: 3,
      distance: 7000,
    },
    rotate: {
      duration: 1,
      yPercent: 100,
      rotateX: 90,
      skewX: 30,
      stagger: 0.03,
    },
  };

  ngAfterViewInit() {
    this.headerMask = this.headerMaskRef.nativeElement;
    this.initHeaderAnimations();
  }

  public initHeaderAnimations() {
    const setHeaderStyles = () => {
      const tl = gsap.timeline();
      tl.set(this.textLines, {
        textFillColor: 'transparent',
        textStrokeColor: '#ffffff',
        textStrokeWidth: 3,
      });
      tl.set(this.textFilledFaces, {
        textFillColor: '#ffffff',
        textStrokeColor: 'transparent',
        textStrokeWidth: 0,
        yPercent: -this.localSettings.rotate.yPercent,
        opacity: 0,
        rotateX: this.localSettings.rotate.rotateX,
        skewX: this.localSettings.rotate.skewX,
      });
      return tl;
    };

    const slideJobTitle = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: this.localSettings.slide.duration,
          ease: `${globalSettings.ease}.out`,
        },
      });
      this.textLines.forEach((line, i) => {
        if (i % 2 === 0) {
          tl.from(line, { x: this.localSettings.slide.distance }, 0);
        } else {
          tl.from(line, { x: -this.localSettings.slide.distance }, 0);
        }
      });
      tl.to(
        this.headerMask,
        {
          opacity: 0,
          duration: `${this.localSettings.slide.duration * 0.75}`,
          pointerEvents: 'none',
          zIndex: -1,
        },
        `-=${this.localSettings.slide.duration * 0.75}`
      );
      return tl;
    };

    const showTextFilledFaces = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: this.localSettings.rotate.duration,
          ease: `${globalSettings.ease}.inOut`,
          stagger: this.localSettings.rotate.stagger,
        },
      });
      tl.to(this.textFilledFaces, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        skewX: 0,
      });
      tl.to(
        this.textOutlinedFaces,
        {
          yPercent: this.localSettings.rotate.yPercent,
          opacity: 0,
          rotateX: -this.localSettings.rotate.rotateX,
          skewX: -this.localSettings.rotate.skewX,
        },
        0
      );
      return tl;
    };

    const animateLogo = () => {
      const tl = gsap.timeline();
      tl.to(this.logoBg, {
        y: 0,
        duration: 1,
        ease: `${globalSettings.ease}.inOut`,
      });
      return tl;
    };

    const animateName = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: `${globalSettings.ease}.inOut`,
        },
      });
      tl.from(this.nameText, {
        y: 10,
        opacity: 0,
      });
      tl.to(this.nameLine, { x: 0 }, 0);
      return tl;
    };

    const animateScrollText = () => {
      const tl = gsap.timeline();
      tl.from(this.scrollText, {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: `${globalSettings.ease}.inOut`,
      });
      return tl;
    };

    const animateScrollIcon = () => {
      gsap.registerPlugin(DrawSVGPlugin);
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.25,
        defaults: {
          duration: 1,
          ease: `${globalSettings.ease}.out`,
        },
      });
      tl.set(this.scrollIcon, {
        opacity: 1,
      });
      tl.fromTo(this.scrollIcon, { drawSVG: false }, { drawSVG: true });
      tl.to(this.scrollIcon, {
        opacity: 0,
      });
      return tl;
    };

    const main = gsap.timeline();
    main
      .add(setHeaderStyles())
      .add(slideJobTitle())
      .add(showTextFilledFaces(), '-=0.5')
      .add(animateLogo(), '-=0.75')
      .add(animateName(), '-=1')
      .add(animateScrollText(), '-=0.5')
      .add(animateScrollIcon());
    return main;
  }
}
