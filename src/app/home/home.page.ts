import {Component} from '@angular/core';
import OpenActivity from '../../plugins/open-activity';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  openJava() {
    OpenActivity.openJava();
  }

  openKotlin() {
    OpenActivity.openKotlin();
  }
}
