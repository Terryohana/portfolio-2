import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-notice',
  templateUrl: './scroll-notice.component.html',
  styleUrls: ['./scroll-notice.component.scss'],
})
export class ScrollNoticeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
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
  }
}
