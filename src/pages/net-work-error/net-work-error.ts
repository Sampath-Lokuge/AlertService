import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-net-work-error',
  templateUrl: 'net-work-error.html'
})
export class NetWorkErrorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetWorkErrorPage');
  }

}
