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
  @ViewChild('logoBgRef') logoBgRef: ElementRef;
  @Output() elementEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.elementEmitter.emit(this.logoBgRef.nativeElement);
  }
}
