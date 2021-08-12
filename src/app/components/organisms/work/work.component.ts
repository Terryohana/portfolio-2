import { Component, Input } from '@angular/core';
import { Project } from '../../molecules/project/project.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  @Input() heading: string;
  @Input() projects: Project[];
}
