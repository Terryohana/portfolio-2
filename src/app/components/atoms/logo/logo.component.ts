import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements AfterViewInit {
  @ViewChild('bg') bg: ElementRef;
  @Output() bgEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.bgEmitter.emit(this.bg.nativeElement);
  }
}
