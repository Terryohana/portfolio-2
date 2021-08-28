import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss'],
})
export class OrbitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('load', () => {
      const tl = gsap.timeline(),
        atom = document.querySelector('.atom'),
        dur = 2,
        del = 0.5;

      const e = tl.fromTo(
        '.electron',
        { rotationX: 90 },
        {
          rotationZ: -360,
          rotationX: 90,
          ease: 'none',
          duration: dur,
          stagger: {
            each: -del,
            repeat: -1,
          },
        },
        0
      );
      const p = tl.to(
        '.path',
        {
          rotationZ: 360,
          ease: 'none',
          duration: dur,
          stagger: {
            each: -del,
            repeat: -1,
          },
        },
        0
      );

      // Add a rotation to the whole atom
      gsap.set(atom, { transformOrigin: 'center center' });
      gsap.to(atom, { rotation: 360, ease: 'none', repeat: -1, duration: 300 });

      // Skip the loading
      tl.progress(0.9999);

      const timeScaleTween = gsap.to(tl, {
        duration: 0.75,
        timeScale: 0.1,
        paused: true,
      });

      // Slow the animation on mouse enter
      atom.addEventListener('mouseenter', function () {
        timeScaleTween.play();
      });
      // Set the animation back to normal on mouse leave
      atom.addEventListener('mouseleave', function () {
        timeScaleTween.reverse();
      });
    });
  }
}
