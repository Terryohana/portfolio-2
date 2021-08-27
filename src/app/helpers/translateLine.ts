import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const translateLine = (
  line: HTMLElement,
  xAxis: boolean,
  container: HTMLElement,
  end: string = 'bottom top'
) => {
  const tl = gsap.timeline();
  if (xAxis) {
    tl.fromTo(line, { xPercent: -100 }, { xPercent: 0 });
  } else {
    tl.fromTo(line, { yPercent: -100 }, { yPercent: 0 });
  }
  ScrollTrigger.create({
    trigger: line,
    start: 'top bottom',
    end: end,
    scroller: container,
    animation: tl,
    scrub: true,
  });
};
