import { Component, Input } from '@angular/core';
import { ContactItem } from '../../molecules/contact-item/contact-item.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() heading: string;
  @Input() contactItems: ContactItem[];
}
