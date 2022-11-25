import { Component } from '@angular/core';
import {Global} from "../global";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state(
        'open',
        style({
          opacity: 0
        })
      ),
      state(
        'close',
        style({
          opacity: 1
        })
      ),
      transition('open => *', [animate('1s ease-out')]),
      transition('* => open', [animate('1s ease-in')])
    ])]
})
export class ButtonGroupComponent {
  hidden: boolean = false;
  initialAnimation: number = 2
  constructor(public global: Global) {
  }

  changeScene(scene: string): void {
    this.global.newScene = scene
    if (scene === 'work') {
      this.global.imageName = 'nisc'
    } else if (scene === 'about'){
      this.global.imageName = 'me'
    } else {
      this.global.imageName = 'bcvm'
    }
  }

  onAnimation(type: string): void {
    if (this.initialAnimation != 0){
      this.initialAnimation--
    } else {
      if (this.global.newScene === 'home'){
        this.hidden = false
      } else {
        this.hidden = type !== 'start'
      }
    }
  }
}
