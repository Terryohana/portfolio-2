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
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss'],
})
export class BikeComponent implements AfterViewInit {
  @ViewChild('bike') bike: ElementRef;
  @ViewChildren('wheel') wheels: QueryList<ElementRef>;

  @Output() bikeEmitter = new EventEmitter();
  @Output() bikeWheelsEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.bikeEmitter.emit(this.bike.nativeElement);
    this.bikeWheelsEmitter.emit(mapElements(this.wheels));
  }
}
