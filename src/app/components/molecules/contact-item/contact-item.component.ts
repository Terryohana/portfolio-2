import { Component, Input } from '@angular/core';

export type ContactItem = {
  heading: string;
  desc: string;
};

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent {
  @Input() contact: ContactItem;
}
