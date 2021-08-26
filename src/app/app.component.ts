import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('blah') blah: ElementRef;
  @ViewChild('blah2') blah2: ElementRef;

  locoScroll: any;
  container: any;
  about: any;

  public bikeWheels: HTMLElement[];

  public work = {
    heading: 'worked on',
    projects: [
      {
        number: '01',
        heading: 'Frasers Group',
        borderTop: 'project--border-top',
        href: 'https://www.google.co.uk/',
      },
      {
        number: '02',
        heading: 'Interactive Investor',
        href: 'https://www.google.co.uk/',
      },
      {
        number: '03',
        heading: 'The White Company',
        href: 'https://www.google.co.uk/',
      },
      {
        number: '04',
        heading: 'Knight Frank',
        href: 'https://www.google.co.uk/',
      },
    ],
  };

  public personal = {
    heading: 'side projects',
    projects: [
      {
        number: '01',
        heading: 'Task Tracker',
        borderTop: 'project--border-top',
        href: 'https://www.google.co.uk/',
      },
      {
        number: '02',
        heading: 'Space gallery',
        href: 'https://www.google.co.uk/',
      },
    ],
  };

  public footer = {
    heading: 'get in touch',
    contactItems: [
      {
        heading: 'Github',
        desc: 'github.com/mattyatesdev',
        href: 'https://github.com/mattyatesdev',
      },
      {
        heading: 'Linkedin',
        desc: 'linkedin.com/in/mattyatesdev',
        href: 'https://www.linkedin.com/in/mattyatesdev/',
      },
      {
        heading: 'Email',
        desc: 'mattyates.dev@gmail.com',
        href: 'mailto:mattyates.dev@gmail.com',
      },
    ],
  };

  ngAfterViewInit() {
    this.container = this.blah.nativeElement;
    this.about = this.blah2.nativeElement;
    this.initScrollAnimations();
  }

  public initScrollAnimations() {
    // this.locoScroll = new LocomotiveScroll({
    //   el: document.querySelector('.scrollContainer'),
    //   smooth: true,
    // });
    // window.addEventListener('load', () => {
    //   this.locoScroll.update();
    // });
    // this.locoScroll.on('scroll', ScrollTrigger.update);
    // ScrollTrigger.scrollerProxy('.scrollContainer', {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? this.locoScroll.scrollTo(value, 0, 0)
    //       : this.locoScroll.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     };
    //   },
    // });
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     scroller: '.scrollContainer',
    //     trigger: this.bikeWheels[0],
    //     start: 'bottom bottom',
    //   },
    // });
    // tl.to(this.bikeWheels[0], { x: 50, duration: 5 });

    // ScrollTrigger.addEventListener('refresh', () => this.locoScroll.update());
    // ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: this.container,
      smooth: true,
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)

    locoScroll.on('scroll', ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(this.container, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: this.container.style.transform ? 'transform' : 'fixed',
    });

    let tl = gsap.timeline({ defaults: { ease: 'none' } });
    tl.to(this.bikeWheels[0], { rotate: 360, duration: 5 });

    ScrollTrigger.create({
      trigger: this.about,
      start: 'top center',
      scroller: this.container,
      animation: tl,
      scrub: true,
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
}
