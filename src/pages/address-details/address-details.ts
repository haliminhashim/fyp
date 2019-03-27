import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { AddressesProvider } from '../../providers/addresses/addresses';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-address-details',
  templateUrl: 'address-details.html',
})
export class AddressDetailsPage {
  address: FormGroup;
  submitAttempt: boolean = false;
  user: any= this.usersProvider.currentUser();

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public toastCtrl: ToastController, public navParams: NavParams, public viewCtrl: ViewController, public addressesProviders: AddressesProvider, public usersProvider: UsersProvider) {
    this.address = this.formBuilder.group({
      id: undefined,
      userId: this.user.id,
      country: ['', Validators.required],
      fullName: ['', Validators.required],
      streetAddress1: ['', Validators.required],
      streetAddress2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      default: 'false'
    });

    this.address = this.navParams.get('data');
  }


  public closeModal() {
    this.viewCtrl.dismiss();
  }

  gotoSave() {
    this.addressesProviders.update(this.address).then(res => {
      if (res != {}) {
        this.presentToast("Address has been sucessfully updated");
        this.closeModal();
      }
      else {
        this.presentToast("Unable to update information. Please try again");
      }
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
