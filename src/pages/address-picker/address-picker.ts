import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { AddressesProvider } from '../../providers/addresses/addresses';
import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-address-picker',
  templateUrl: 'address-picker.html',
})
export class AddressPickerPage {
addresses;
address;
selectedAddress;
user: any = this.usersProvider.currentUser();
  constructor(public navCtrl: NavController, public usersProvider: UsersProvider, public modalCtrl: ModalController, public navParams: NavParams, public addressesProvider: AddressesProvider, public viewCtrl: ViewController) {
    this.addressesProvider.getAddressesByUserId(this.user.id).then(data => {
      this.addresses = data;
    });
    this.address = [];
    this.selectedAddress = 0;//this.navParams.get('id');
  }

  ionViewDidLoad() {
  }

  public closeModal(){
    let data = this.selectedAddress;
    this.viewCtrl.dismiss(data);
  }

  public createAddress(){
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

  getAddresses(){
    this.addressesProvider.getAddressesByUserId(1).then(data => { //this.user.id
      this.addresses = data;
    });
  }

}
