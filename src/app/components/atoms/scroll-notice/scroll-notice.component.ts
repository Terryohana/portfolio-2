import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-scroll-notice',
  templateUrl: './scroll-notice.component.html',
  styleUrls: ['./scroll-notice.component.scss'],
})
export class ScrollNoticeComponent {
  @ViewChild('text') text: ElementRef;
  @ViewChild('icon') icon: ElementRef;

  @Output() textEmitter = new EventEmitter();
  @Output() iconEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.textEmitter.emit(this.text.nativeElement);
    this.iconEmitter.emit(this.icon.nativeElement);
  }
}
