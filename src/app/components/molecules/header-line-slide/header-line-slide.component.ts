import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { mapElements } from '../../helpers/mapElements';

@Component({
  selector: 'app-header-line-slide',
  templateUrl: './header-line-slide.component.html',
  styleUrls: ['./header-line-slide.component.scss'],
})
export class HeaderLineSlideComponent {
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
