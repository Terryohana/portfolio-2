import { Component, ElementRef, ViewChild } from '@angular/core';
import { globalSettings } from '../../../helpers/globalSettings';
import { gsap } from 'gsap';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @ViewChild('bg') bg: ElementRef;

  public background: HTMLElement;

  public settings = {
    duration: 0.5,
    ease: `${globalSettings.ease}.inOut`,
    yPercent: 100,
  };

  ngAfterViewInit() {
    this.initButton();
  }

  public initButton() {
    this.background = this.bg.nativeElement;
    gsap.set(this.background, {
      yPercent: this.settings.yPercent,
    });
  }

  public showBackground() {
    gsap.to(this.background, {
      yPercent: 0,
      duration: this.settings.duration,
      ease: this.settings.ease,
    });
  }

  public hideBackground() {
    gsap.to(this.background, {
      yPercent: this.settings.yPercent,
      duration: this.settings.duration,
      ease: this.settings.ease,
    });
  }
}
