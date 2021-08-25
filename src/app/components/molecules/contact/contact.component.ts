import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { animations } from '../../../constants/animations';
import { gsap } from 'gsap';

export type Contact = {
  heading: string;
  desc: string;
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('filled') filled: ElementRef;
  @ViewChild('outlined') outlined: ElementRef;
  @ViewChild('lineRef') lineRef: ElementRef;

  @Input() contact: Contact;

  public titleFilled: HTMLElement;
  public titleOutlined: HTMLElement;
  public line: HTMLElement;

  public settings = {
    duration: animations.duration,
    ease: `${animations.ease}.inOut`,
    opacity: 1,
    yPercent: 100,
    rotateX: 90,
    skewX: 40,
  };

  ngAfterViewInit() {
    this.initProject();
  }

  public initProject() {
    this.titleOutlined = this.outlined.nativeElement;
    this.titleFilled = this.filled.nativeElement;
    this.line = this.lineRef.nativeElement;
    gsap.set(this.titleOutlined, {
      yPercent: -this.settings.yPercent,
      opacity: 0,
      rotateX: this.settings.rotateX,
      skewX: this.settings.skewX,
    });
    gsap.set(this.line, { xPercent: -100 });
  }

  public showBack() {
    const tl = gsap.timeline({
      defaults: {
        ease: this.settings.ease,
        duration: this.settings.duration,
      },
    });
    tl.to(
      this.titleFilled,
      {
        opacity: 0,
        yPercent: this.settings.yPercent,
        rotateX: -this.settings.rotateX,
        skewX: -this.settings.skewX,
      },
      0
    );
    tl.to(
      this.titleOutlined,
      {
        yPercent: 0,
        opacity: this.settings.opacity,
        rotateX: 0,
        skewX: 0,
      },
      0
    );
    tl.to(this.line, { xPercent: 0 }, 0);
    return tl;
  }

  public showFront() {
    const tl = gsap.timeline({
      defaults: {
        duration: this.settings.duration,
        ease: this.settings.ease,
      },
    });
    tl.to(
      this.titleFilled,
      {
        yPercent: 0,
        opacity: this.settings.opacity,
        rotateX: 0,
        skewX: 0,
      },
      0
    );
    tl.to(
      this.titleOutlined,
      {
        yPercent: -this.settings.yPercent,
        opacity: 0,
        rotateX: this.settings.rotateX,
        skewX: this.settings.skewX,
      },
      0
    );
    tl.to(this.line, { xPercent: -100 }, 0);
    return tl;
  }
}
