import {Component} from '@angular/core';
import {Global} from "../global";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass'],
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
export class ImageComponent {
  fade: string = 'close'

  constructor(public global: Global) {
  }


}
