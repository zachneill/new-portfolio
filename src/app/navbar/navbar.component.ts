import { Component } from '@angular/core';
import {Global} from "../global";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  faLinkedin = faLinkedin
  faGithub = faGithub
  faFacebook= faFacebook
  faGoogle = faGoogle
  faDiscord = faDiscord
  faInstagram = faInstagram
  window: number = window.innerWidth;

  constructor(public global: Global) {
  }

  reset() {
    this.global.imageName = 'cliff'
    this.global.newScene = 'home'
  }
}
