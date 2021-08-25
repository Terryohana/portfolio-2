import { Component, Input } from '@angular/core';
import { Contact } from '../../molecules/contact/contact.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() heading: string;
  @Input() contactItems: Contact[];
}
