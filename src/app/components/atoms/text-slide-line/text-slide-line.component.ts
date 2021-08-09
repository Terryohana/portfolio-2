import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-slide-line',
  templateUrl: './text-slide-line.component.html',
  styleUrls: ['./text-slide-line.component.scss'],
})
export class TextSlideLineComponent {
  @Input() developer?: boolean;
  @Input() creative?: boolean;
  @Input() transform?: string;

  public developerWords = new Array(8);
  public creativeWords = new Array(7);
}
