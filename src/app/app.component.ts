import { AfterViewInit, Component, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

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
    this.updateScroll();
  }

  public updateScroll(): void {
    window.addEventListener('load', () => {
      this.scroll.update();
    });
  }
}
