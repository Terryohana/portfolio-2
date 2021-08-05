import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  divOne: ElementRef;
  divTwo: ElementRef;

  ngAfterViewInit(): void {
    console.log('div one', this.divOne);
    console.log('div two', this.divTwo);
  }
}
