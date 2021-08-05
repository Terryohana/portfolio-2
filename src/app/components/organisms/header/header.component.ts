import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  divOne: ElementRef;
  divTwo: ElementRef;

  ngAfterViewInit() {
    console.log('div one', this.divOne);
    console.log('div two', this.divTwo);
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
      const textLines = document.querySelectorAll('.header__title');
      const filledFaces = document.querySelectorAll(
        '.header__letter__face--filled'
      );
      const tl = gsap.timeline();
      tl.set(textLines, {
        textFillColor: 'transparent',
        textStrokeColor: '#ffffff',
        textStrokeWidth: 3,
      });
      tl.set(filledFaces, {
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
      const textLines = document.querySelectorAll('.header__title');
      const tl = gsap.timeline({
        defaults: {
          duration: settings.slide.duration,
          ease: settings.slide.ease,
        },
      });
      tl.to('.header__block', {
        delay: 0.5,
        opacity: 1,
        duration: settings.slide.duration,
      });
      textLines.forEach((line, i) => {
        if (i % 2 === 0) {
          tl.from(
            line,
            {
              x: settings.slide.distance,
            },
            0.5
          );
        } else {
          tl.from(
            line,
            {
              x: -settings.slide.distance,
            },
            0.5
          );
        }
      });
      return tl;
    };

    const showFilledFaces = () => {
      const filledFaces = document.querySelectorAll(
        '.header__letter__face--filled'
      );
      const outlinedFaces = document.querySelectorAll(
        '.header__letter__face--outlined'
      );
      const tl = gsap.timeline({
        defaults: {
          duration: settings.rotate.duration,
          ease: settings.rotate.ease,
          stagger: settings.rotate.stagger,
        },
      });
      tl.to(filledFaces, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        skewX: 0,
      });
      tl.to(
        outlinedFaces,
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
      tl.to('.logo__bg', {
        y: 0,
        duration: 1,
        ease: 'power4.inOut',
      });
      return tl;
    };

    const animateName = () => {
      const name = new SplitText('.name__text', { type: 'chars' });
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
      tl.to('.name__line', { x: 0 }, 0);
      return tl;
    };

    const animateScrollText = () => {
      const name = new SplitText('.scroll__text', { type: 'chars' });
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
        '.scroll__line',
        { drawSVG: false },
        {
          drawSVG: true,
        }
      );
      tl.to('.scroll__line', {
        opacity: 0,
      });
      tl.set('.scroll__line', {
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
