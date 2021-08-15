import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

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
  @Input() headingMargin?: 'heading--margin-bottom' | 'heading--margin-right';
  @Input() textAxis: 'heading__text--vertical';
  @Input() lineAxis: 'heading__line--vertical';
  @Input() animateFromParent?: boolean;
  @Input() animateScrollHorizontal?: boolean;
  @Input() animateScrollVertical?: boolean;
  @Output() headingEmitter = new EventEmitter();
  @Output() lineEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.sendElementsToParent();
  }

  public sendElementsToParent() {
    const heading = this.headingRef.nativeElement;
    const line = this.lineRef.nativeElement;
    if (this.animateFromParent) {
      this.headingEmitter.emit(heading);
      this.lineEmitter.emit(line);
    } else {
      return null;
    }
  }
}
