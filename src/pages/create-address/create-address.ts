import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersProvider } from '../../providers/users/users';
import { AddressesProvider } from '../../providers/addresses/addresses';

/**
 * Generated class for the CreateAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-address',
  templateUrl: 'create-address.html',
})
export class CreateAddressPage {
  address: FormGroup;
  submitAttempt: boolean = false;
  user: any = this.usersProvider.currentUser();
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public viewCtrl: ViewController, public navParams: NavParams, public formBuilder: FormBuilder, public addressesProvider: AddressesProvider, public usersProvider: UsersProvider) {
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

  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.submitAttempt = true;
    if (this.address.valid) {
      this.addressesProvider.create(this.address.value).then(data => {
        if (data){
          this.presentToast("Address has been succefully created");
          this.closeModal();
        }
        else{
          this.presentToast("Unable to create address. Please try again");
        }
    })};
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
