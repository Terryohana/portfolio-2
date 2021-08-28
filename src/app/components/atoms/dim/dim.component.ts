import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dim',
  templateUrl: './dim.component.html',
  styleUrls: ['./dim.component.scss'],
})
export class DimComponent {
  @Input() position?: string;
}
