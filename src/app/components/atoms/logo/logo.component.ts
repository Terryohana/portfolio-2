import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { mapElements } from '../../../helpers/mapElements';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements AfterViewInit {
  @ViewChildren('bg') bgs: QueryList<ElementRef>;
  @Output() bgsEmitter = new EventEmitter();

  ngAfterViewInit(): void {
    this.bgsEmitter.emit(mapElements(this.bgs));
  }
}
