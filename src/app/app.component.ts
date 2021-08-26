import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { data } from 'src/assets/data/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container') locoContainerRef: ElementRef;
  @ViewChild('about') aboutRef: ElementRef;

  public locoScroll: any;
  public locoContainer: HTMLElement;
  public about: HTMLElement;
  public bike: HTMLElement;
  public bikeWheels: HTMLElement[];
  public data = data;

  ngAfterViewInit() {
    this.locoContainer = this.locoContainerRef.nativeElement;
    this.about = this.aboutRef.nativeElement;
    this.syncScrollLibraries();
  }

  public syncScrollLibraries() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: this.locoContainer,
      smooth: true,
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(this.locoContainer, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: this.locoContainer.style.transform ? 'transform' : 'fixed',
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
    this.animateBike();
  }

  public animateBike() {
    const tl = gsap.timeline();
    tl.to(this.bike, { y: 500 });
    tl.to(this.bikeWheels, { rotate: -540 }, 0);
    ScrollTrigger.create({
      trigger: this.about,
      start: 'top bottom',
      scroller: this.locoContainer,
      animation: tl,
      scrub: true,
    });
  }
}
