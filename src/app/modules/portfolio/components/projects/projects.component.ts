import { Component, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/Projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'aaa',
      alt: 'aaa',
      title: 'aaa',
      width: '100px',
      height: '51px',
      description: 'aaaa',
      link: [
        {
          name: '',
          href: '',
        }
      ],
    },
  ]);
}
