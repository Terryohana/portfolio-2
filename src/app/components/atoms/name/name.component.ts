import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent {
  @ViewChild('text') text: ElementRef;
  @ViewChild('line') line: ElementRef;
  @Output() textEmitter = new EventEmitter();
  @Output() lineEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.textEmitter.emit(this.text.nativeElement);
    this.lineEmitter.emit(this.line.nativeElement);
  }
}
