import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header-line-slide',
  templateUrl: './header-line-slide.component.html',
  styleUrls: ['./header-line-slide.component.scss'],
})
export class HeaderLineSlideComponent {
  @ViewChild('divComponent2') divComponent1: ElementRef;
  @Output() divComponent = new EventEmitter();

  ngAfterViewInit(): void {
    this.divComponent.emit(this.divComponent1);
  }
}
