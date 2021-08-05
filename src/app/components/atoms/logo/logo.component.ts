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
  @ViewChild('logoBgWhite') logoBgWhite: ElementRef;
  @Output() bgWhiteEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.bgWhiteEmitter.emit(this.logoBgWhite.nativeElement);
  }
}
