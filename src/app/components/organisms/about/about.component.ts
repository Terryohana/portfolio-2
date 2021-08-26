import {
  Component,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { mapElements } from '../../../helpers/mapElements';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('wheel') wheels: QueryList<ElementRef>;
  @Output() wheelsEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.wheelsEmitter.emit(mapElements(this.wheels));
  }
}
