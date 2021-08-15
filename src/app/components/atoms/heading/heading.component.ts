import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';

export type Heading = string;

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {
  @ViewChild('headingRef') headingRef: ElementRef;
  @ViewChild('lineRef') lineRef: ElementRef;
  @Input() heading: Heading;
  @Input() headingAxis: 'heading__text--vertical';
  @Input() lineAxis: 'heading__line--vertical';
  @Input() animationSettings:
    | 'landing'
    | 'scroll-vertical'
    | 'scroll-horizontal';
  @Input() animateOnInit?: boolean;
  @Input() animateScrollHorizontal?: boolean;
  @Input() animateScrollVertical?: boolean;
  @Input() scrollSpeed: string;

  @Output() headingEmitter = new EventEmitter();
  @Output() lineEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.initHeading();
  }

  public initHeading() {
    const heading = this.headingRef.nativeElement;
    const line = this.lineRef.nativeElement;
    if ((this.animationSettings = 'landing')) {
      gsap.set(line, {
        xPercent: -100,
      });
      this.headingEmitter.emit(heading);
      this.lineEmitter.emit(line);
    }
    if ((this.animationSettings = 'scroll-horizontal')) {
      gsap.set(line, {
        xPercent: -100,
      });
    }
    if ((this.animationSettings = 'scroll-vertical')) {
      gsap.set(line, {
        yPercent: -100,
      });
    } else {
      return null;
    }
  }
}
