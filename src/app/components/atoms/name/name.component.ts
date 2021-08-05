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
  @ViewChild('nameRef') nameRef: ElementRef;
  @ViewChild('lineRef') lineRef: ElementRef;

  @Output() nameRefEmitter = new EventEmitter();
  @Output() lineRefEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.nameRefEmitter.emit(this.nameRef.nativeElement);
    this.lineRefEmitter.emit(this.lineRef.nativeElement);
  }
}
