import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { globalSettings } from '../../../helpers/globalSettings';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initProject();
  }

  public initProject() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
      const text = project.children[1];
      const titleFilled = project.children[1].children[0];
      const titleOutlined = project.children[1].children[1];
      const activeMarker = project.children[2];
      const settings = {
        title: {
          duration: 0.75,
          ease: `${globalSettings.ease}.inOut`,
          opacity: 1,
          yPercent: 100,
          rotateX: 90,
          skewX: 40,
        },
        marker: {
          duration: 0.75,
          ease: `${globalSettings.ease}.inOut`,
          opacity: 1,
          xPercent: -100,
        },
      };
      gsap.set(titleOutlined, {
        yPercent: -settings.title.yPercent,
        opacity: 0,
        rotateX: settings.title.rotateX,
        skewX: settings.title.skewX,
      });
      gsap.set(activeMarker, {
        xPercent: settings.marker.xPercent,
        opacity: 0,
      });
      const showOutlinedTitle = () => {
        const tl = gsap.timeline({
          defaults: {
            ease: settings.title.ease,
            duration: settings.title.duration,
          },
        });
        tl.to(titleFilled, {
          yPercent: settings.title.yPercent,
        });
        tl.to(
          titleFilled,
          {
            opacity: 0,
            rotateX: -settings.title.rotateX,
            skewX: -settings.title.skewX,
          },
          0
        );
        tl.to(
          titleOutlined,
          {
            yPercent: 0,
            opacity: settings.title.opacity,
            rotateX: 0,
            skewX: 0,
          },
          0
        );
        tl.to(
          activeMarker,
          {
            xPercent: 0,
            opacity: 1,
          },
          0
        );
        return tl;
      };
      const showFilledTitle = () => {
        const tl = gsap.timeline({
          defaults: {
            duration: settings.title.duration,
            ease: settings.title.ease,
          },
        });
        tl.to(titleFilled, {
          yPercent: 0,
          opacity: settings.title.opacity,
          rotateX: 0,
          skewX: 0,
        });
        tl.to(
          titleOutlined,
          {
            yPercent: -settings.title.yPercent,
            opacity: 0,
            rotateX: settings.title.rotateX,
            skewX: settings.title.skewX,
          },
          0
        );
        tl.to(
          activeMarker,
          {
            xPercent: settings.marker.xPercent,
            opacity: 0,
          },
          0
        );
        return tl;
      };
      text.addEventListener('mouseenter', () => {
        showOutlinedTitle();
      });
      text.addEventListener('mouseleave', () => {
        showFilledTitle();
      });
    });
  }
}
