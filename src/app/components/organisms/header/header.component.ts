import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerMask') headerMaskRef: ElementRef;

  public logoBgWhite: HTMLElement;
  public textLines: HTMLElement[];
  public filledFaces: HTMLElement[];
  public outlinedFaces: HTMLElement[];
  public nameText: HTMLElement;
  public nameLine: HTMLElement;
  public scrollText: HTMLElement;
  public scrollIcon: HTMLElement;
  public headerMask: HTMLElement;

  ngAfterViewInit() {
    this.headerMask = this.headerMaskRef.nativeElement;
    this.animateHeader();
  }

  public animateHeader() {
    const settings = {
      slide: {
        duration: 3,
        distance: 1800,
        ease: 'power4.out',
      },
      rotate: {
        duration: 1,
        ease: 'power4.inOut',
        yPercent: 100,
        rotateX: 90,
        skewX: 30,
        stagger: 0.03,
      },
    };

    const setHeaderStyles = () => {
      const tl = gsap.timeline();
      tl.set(this.textLines, {
        textFillColor: 'transparent',
        textStrokeColor: '#ffffff',
        textStrokeWidth: 3,
      });
      tl.set(this.filledFaces, {
        textFillColor: '#ffffff',
        textStrokeColor: 'transparent',
        textStrokeWidth: 0,
        yPercent: -settings.rotate.yPercent,
        opacity: 0,
        rotateX: settings.rotate.rotateX,
        skewX: settings.rotate.skewX,
      });
      return tl;
    };

    const slideJobTitle = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: settings.slide.duration,
          ease: settings.slide.ease,
        },
      });
      this.textLines.forEach((line, i) => {
        if (i % 2 === 0) {
          tl.from(line, { x: settings.slide.distance }, 0);
        } else {
          tl.from(line, { x: -settings.slide.distance }, 0);
        }
      });
      tl.to(
        this.headerMask,
        {
          opacity: 0,
          duration: 2,
        },
        `-=${settings.slide.duration * 0.9}`
      );
      return tl;
    };

    const showFilledFaces = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: settings.rotate.duration,
          ease: settings.rotate.ease,
          stagger: settings.rotate.stagger,
        },
      });
      tl.to(this.filledFaces, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        skewX: 0,
      });
      tl.to(
        this.outlinedFaces,
        {
          yPercent: settings.rotate.yPercent,
          opacity: 0,
          rotateX: -settings.rotate.rotateX,
          skewX: -settings.rotate.skewX,
        },
        0
      );
      return tl;
    };

    const animateLogo = () => {
      const tl = gsap.timeline();
      tl.to(this.logoBgWhite, {
        y: 0,
        duration: 1,
        ease: 'power4.inOut',
      });
      return tl;
    };

    const animateName = () => {
      const name = new SplitText(this.nameText, { type: 'chars' });
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power4.inOut',
        },
      });
      tl.from(name.chars, {
        y: 10,
        opacity: 0,
        stagger: {
          ease: 'power4.inOut',
          amount: 0.01,
        },
      });
      tl.to(this.nameLine, { x: 0 }, 0);
      return tl;
    };

    const animateScrollText = () => {
      const name = new SplitText(this.scrollText, { type: 'chars' });
      const tl = gsap.timeline();
      tl.from(name.chars, {
        y: 10,
        opacity: 0,
        duration: 1,
        stagger: {
          ease: 'power4.inOut',
          amount: 0.05,
        },
      });
      return tl;
    };

    const animateScrollIcon = () => {
      gsap.registerPlugin(DrawSVGPlugin);
      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          duration: 1,
          ease: 'power4.out',
        },
      });
      tl.fromTo(
        this.scrollIcon,
        { drawSVG: false },
        {
          drawSVG: true,
        }
      );
      tl.to(this.scrollIcon, {
        opacity: 0,
      });
      tl.set(this.scrollIcon, {
        opacity: 1,
      });
      return tl;
    };

    const main = gsap.timeline({ delay: 1 });
    main
      .add(setHeaderStyles())
      .add(slideJobTitle())
      .add(showFilledFaces(), '-=0.5')
      .add(animateLogo(), '-=0.75')
      .add(animateName(), '-=1')
      .add(animateScrollText(), '-=0.5')
      .add(animateScrollIcon());
    return main;
  }
}
