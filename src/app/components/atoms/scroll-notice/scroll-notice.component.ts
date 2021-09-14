import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { mapElements } from '../../../helpers/mapElements';

@Component({
  selector: 'app-scroll-notice',
  templateUrl: './scroll-notice.component.html',
  styleUrls: ['./scroll-notice.component.scss'],
})
export class ScrollNoticeComponent {
  @ViewChild('text') text: ElementRef;
  @ViewChildren('icon') icons: QueryList<ElementRef>;

  @Output() textEmitter = new EventEmitter();
  @Output() iconsEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.textEmitter.emit(this.text.nativeElement);
    this.iconsEmitter.emit(mapElements(this.icons));
  }
}
