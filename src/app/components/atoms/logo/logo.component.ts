import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const animateLogo = () => {
      const tl = gsap.timeline();
      tl.to('.logo__bg', {
        y: 0,
        duration: 1,
        ease: 'power4.inOut',
      });
      return tl;
    };
  }

  public animateLogo(): void {
    console.log('lets go');
  }
}
