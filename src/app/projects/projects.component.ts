import {Component} from '@angular/core';
import {Global} from "../global";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  image: string = 'bcvm';

  constructor( public global: Global) {
  }

  handleNext() {
    if (this.image === 'bcvm'){
      this.global.changeImage('sigbuild')
      this.image = 'sigbuild'
    } else if (this.image === 'sigbuild'){
      this.global.changeImage('bcvm')
      this.image = 'bcvm'
    }
  }
}
