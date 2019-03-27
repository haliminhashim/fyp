import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { AddressesProvider } from '../../providers/addresses/addresses';

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  addresses: any = [];
  address: object = {};
  user: any = this.usersProvider.currentUser();
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public addressesProvider: AddressesProvider, public navParams: NavParams, public modalCtrl: ModalController, public usersProvider: UsersProvider) {
    this.getAddresses();
  }

  getAddresses(){
    this.addressesProvider.getAddressesByUserId(this.user.id).then(data => {
      this.addresses = data;
    });
  }

  createAddress() {
    var modalPage = this.modalCtrl.create('CreateAddressPage');
    modalPage.present();

    modalPage.onDidDismiss(() => {
      this.getAddresses();
    })
  }

  viewAddress(address) {
    var modalPage = this.modalCtrl.create('AddressDetailsPage', {
      data: address
    });
    modalPage.present();

    modalPage.onDidDismiss(() => {
      this.getAddresses();
    })
  }

  deleteAddress(id) {
    this.addressesProvider.delete(id).then(res => {
      if (res) {
        this.getAddresses();
        this.presentToast("Address has been sucessfully deleted.")
      }
      else
        this.presentToast("Unable to delete information. Please try again")
    });
  }

  setBillingDefault(data){
    let json = {
      "id": this.user.id,
      "defaultBillingAddress": data
    }
    this.usersProvider.update(json).then(data => {
      if(data != {}){
        this.user = data;
        this.presentToast("Default Billing Address has been updated");
      }
      else{
        this.presentToast("Unable to update information. Please try again");
      }
    });
  }

  setShippingDefault(data){
    let json = {
      "id": this.user.id,
      "defaultShippingAddress": data
    }
    this.usersProvider.update(json).then(data => {
      if(data != {}){
        this.user = data;
        this.presentToast("Default Shipping Address has been updated");
      }
      else{
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
