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
  @ViewChildren('lineRef') lineRefs: QueryList<ElementRef>;
  @ViewChildren('filledFaceRef') filledFaceRefs: QueryList<ElementRef>;
  @ViewChildren('outlinedFaceRef') outlinedFaceRefs: QueryList<ElementRef>;

  @Output() textLinesEmitter = new EventEmitter();
  @Output() filledFacesEmitter = new EventEmitter();
  @Output() outlinedFacesEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.textLinesEmitter.emit(mapElements(this.lineRefs));
    this.filledFacesEmitter.emit(mapElements(this.filledFaceRefs));
    this.outlinedFacesEmitter.emit(mapElements(this.outlinedFaceRefs));
  }
}
