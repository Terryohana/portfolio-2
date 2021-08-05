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
  @Output() elementEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.elementEmitter.emit(mapElements(this.lineRefs));
  }
}
