import {
  Component,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import { mapElements } from '../../../helpers/mapElements';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('bike') bike: ElementRef;
  @ViewChildren('wheel') wheels: QueryList<ElementRef>;

  @Output() bikeEmitter = new EventEmitter();
  @Output() wheelsEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.bikeEmitter.emit(this.bike.nativeElement);
    this.wheelsEmitter.emit(mapElements(this.wheels));
  }
}
