import {Component} from '@angular/core';
import {Global} from "../global";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {

  constructor( public global: Global) {
  }

}
