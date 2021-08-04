import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
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
  }
}
