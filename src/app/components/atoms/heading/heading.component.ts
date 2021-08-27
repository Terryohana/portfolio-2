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
  @Input() xAxis: boolean;

  @Output() headingEmitter = new EventEmitter();
  @Output() lineEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.headingEmitter.emit(this.headingRef.nativeElement);
    this.lineEmitter.emit(this.lineRef.nativeElement);
  }
}
