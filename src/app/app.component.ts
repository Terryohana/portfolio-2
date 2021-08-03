import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  scroll: any;

  ngOnInit() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
    console.log(gsap);
  }
}
