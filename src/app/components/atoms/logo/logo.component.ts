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
  @ViewChild('divComponent1') divComponent1: ElementRef;
  @Output() divComponent = new EventEmitter();

  ngAfterViewInit(): void {
    this.divComponent.emit(this.divComponent1);
  }
}
