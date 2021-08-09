import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dim',
  templateUrl: './dim.component.html',
  styleUrls: ['./dim.component.scss'],
})
export class DimComponent {
  @Input() position?: boolean;
}
