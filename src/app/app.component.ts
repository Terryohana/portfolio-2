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
        borderTop: 'project--border-top',
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
        heading: 'Knight Frank',
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
      },
      {
        number: '02',
        heading: 'Space gallery',
      },
      {
        number: '03',
        heading: 'Calculator',
      },
    ],
  };

  public contact = {
    heading: 'get in touch',
    contactItems: [
      {
        heading: 'Github',
        desc: 'github.com/mattyatesdev',
      },
      {
        heading: 'Codepen',
        desc: 'codepen.com/mattyatesdev',
      },
      {
        heading: 'Linkedin',
        desc: 'linkedin.com/mattyatesdev',
      },
      {
        heading: 'Email',
        desc: 'mattyates.dev@gmail.com',
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
