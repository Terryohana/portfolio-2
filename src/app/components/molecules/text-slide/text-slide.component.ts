import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { mapElements } from '../../../helpers/mapElements';

@Component({
  selector: 'app-text-slide',
  templateUrl: './text-slide.component.html',
  styleUrls: ['./text-slide.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextSlideComponent {
  @ViewChildren('line') lines: QueryList<ElementRef>;
  @ViewChildren('filledFace') filledFaces: QueryList<ElementRef>;
  @ViewChildren('outlinedFace') outlinedFaces: QueryList<ElementRef>;

  @Output() linesEmitter = new EventEmitter();
  @Output() filledFacesEmitter = new EventEmitter();
  @Output() outlinedFacesEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.linesEmitter.emit(mapElements(this.lines));
    this.filledFacesEmitter.emit(mapElements(this.filledFaces));
    this.outlinedFacesEmitter.emit(mapElements(this.outlinedFaces));
  }
}
