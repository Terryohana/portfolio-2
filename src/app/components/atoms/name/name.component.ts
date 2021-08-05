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
  @ViewChild('name') name: ElementRef;
  @ViewChild('line') line: ElementRef;

  @Output() nameEmitter = new EventEmitter();
  @Output() lineEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.nameEmitter.emit(this.name.nativeElement);
    this.lineEmitter.emit(this.line.nativeElement);
  }
}
