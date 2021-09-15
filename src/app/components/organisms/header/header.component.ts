import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { animations } from '../../../constants/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerMask') headerMaskRef: ElementRef;
  // logo
  public logoBgs: HTMLElement[];
  // name
  public nameText: HTMLElement;
  public nameLine: HTMLElement;
  // header line slide
  public textLines: HTMLElement[];
  public textFilledFaces: HTMLElement[];
  public textOutlinedFaces: HTMLElement[];
  // scroll notice
  public scrollText: HTMLElement;
  public scrollIcons: HTMLElement[];
  // header mask
  public headerMask: HTMLElement;
  // animation
  public settings = {
    slide: {
      duration: animations.duration * 4,
      distance: 7000,
    },
    rotate: {
      duration: animations.duration,
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
      tl.set(this.nameLine, { xPercent: -100 });
      tl.set(this.scrollIcons[1], { opacity: 0 });
      tl.set([this.logoBgs[0], this.logoBgs[1]], { yPercent: 100 });
      tl.set(this.textFilledFaces, {
        yPercent: -this.settings.rotate.yPercent,
        opacity: 0,
        rotateX: this.settings.rotate.rotateX,
        skewX: this.settings.rotate.skewX,
      });
      return tl;
    };

    const slideJobTitle = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: this.settings.slide.duration,
          ease: `${animations.ease}.out`,
        },
      });
      this.textLines.forEach((line, i) => {
        if (i % 2 === 0) {
          tl.from(line, { x: this.settings.slide.distance }, 0);
        } else {
          tl.from(line, { x: -this.settings.slide.distance }, 0);
        }
      });
      tl.to(
        this.headerMask,
        {
          opacity: 0,
          duration: `${this.settings.slide.duration * 0.5}`,
          pointerEvents: 'none',
          zIndex: -1,
        },
        `-=${this.settings.slide.duration * 0.6}`
      );
      return tl;
    };

    const showTextFilledFaces = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: this.settings.rotate.duration,
          ease: `${animations.ease}.inOut`,
          stagger: this.settings.rotate.stagger,
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
          yPercent: this.settings.rotate.yPercent,
          opacity: 0,
          rotateX: -this.settings.rotate.rotateX,
          skewX: -this.settings.rotate.skewX,
        },
        0
      );
      return tl;
    };

    const animateLogo = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: animations.duration,
          ease: `${animations.ease}.inOut`,
        },
      });
      tl.to(this.logoBgs[0], {
        yPercent: 0,
        ease: `${animations.ease}.inOut`,
      });
      tl.to(
        this.logoBgs[1],
        {
          yPercent: -100,
          duration: animations.duration * 2,
        },
        `-=${animations.duration}`
      );
      return tl;
    };

    const animateName = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: animations.duration,
          ease: `${animations.ease}.inOut`,
        },
      });
      tl.from(this.nameText, {
        y: 10,
        opacity: 0,
      });
      tl.to(this.nameLine, { xPercent: 0 }, 0);
      return tl;
    };

    const animateScrollText = () => {
      const tl = gsap.timeline();
      tl.from([this.scrollText, this.scrollIcons[1]], {
        y: 10,
        opacity: 0,
        duration: animations.duration,
        ease: `${animations.ease}.inOut`,
      });
      return tl;
    };

    const animateScrollIcon = () => {
      gsap.registerPlugin(DrawSVGPlugin);
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.25,
        defaults: {
          duration: animations.duration,
          ease: `${animations.ease}.out`,
        },
      });
      tl.set(this.scrollIcons[0], {
        opacity: 1,
      });
      tl.fromTo(this.scrollIcons[0], { drawSVG: false }, { drawSVG: true });
      tl.to(this.scrollIcons[0], {
        opacity: 0,
      });
      return tl;
    };

    const main = gsap.timeline();
    main
      .add(setHeaderStyles())
      .add(slideJobTitle())
      .add(showTextFilledFaces(), `-=${this.settings.slide.duration * 0.1}`)
      .add(animateLogo(), `-=${this.settings.rotate.duration * 0.75}`)
      .add(animateName(), `-=${animations.duration * 1.75}`)
      .add(animateScrollText(), `-=${animations.duration * 1.25}`)
      .add(animateScrollIcon());
    return main;
  }
}
