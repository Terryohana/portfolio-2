import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  smoothScroll: any;

  public work = {
    heading: 'worked on',
    projects: [
      {
        number: '01',
        heading: 'Frasers Group',
      },
      {
        number: '02',
        heading: 'Interactive Investor',
      },
      {
        number: '03',
        heading: 'The White Company',
      },
      {
        number: '04',
        heading: 'Colt',
      },
    ],
  };

  public personal = {
    heading: 'side projects',
    projects: [
      {
        number: '01',
        heading: 'Task Tracker',
      },
      {
        number: '01',
        heading: 'Task Tracker',
      },
      {
        number: '01',
        heading: 'Task Tracker',
      },
      {
        number: '01',
        heading: 'Task Tracker',
      },
    ],
  };

  ngOnInit() {
    this.smoothScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
    window.addEventListener('load', () => {
      this.smoothScroll.update();
    });
  }
}
