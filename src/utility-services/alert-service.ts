import { AlertController, NavController } from "ionic-angular";
import { NetWorkErrorPage } from "../pages/net-work-error/net-work-error";

export abstract class AlertService {

    constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
    }

    //network Error
    networkError() {
        let alert = this.alertCtrl.create({
            title: 'Network Error',
            message: 'There was a network error, are you connected to the internet?',
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        this.navCtrl.push(NetWorkErrorPage);
                    }
                }
            ]
        });
        alert.present();
    }

}