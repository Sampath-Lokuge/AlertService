import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { AlertService } from "../../utility-services/alert-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends AlertService {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    super(alertCtrl, navCtrl);
  }

  //network error
  networkError(): void {
    super.networkError();
  }


}
