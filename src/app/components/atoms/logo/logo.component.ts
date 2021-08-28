import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements AfterViewInit {
  @Input() orbit?: boolean;
  @ViewChild('bg') bg: ElementRef;
  @Output() bgEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.bgEmitter.emit(this.bg.nativeElement);
  }
}
