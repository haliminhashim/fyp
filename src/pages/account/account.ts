import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  curpassword: string = "";
  newpassword: string = "";
  conpassword: string = "";
  currentPasswordValid: boolean = false;
  newPasswordValid: boolean = false;
  newPasswordNotEmpty: boolean = false;
  PersonalInfoSubmitAttempt: boolean = false;
  PasswordSubmitAttempt: boolean = false;
  account: FormGroup;
  user: any = this.usersProvider.currentUser();
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public usersProvider: UsersProvider, public formBuilder: FormBuilder) { 
    this.account = this.formBuilder.group({
      id: this.user.id,
      username: this.user.username,
      email: [this.user.email, Validators.compose([Validators.email, Validators.required])],
      firstname: [this.user.firstname, Validators.required],
      lastname: [this.user.lastname, Validators.required],
      gender: [this.user.gender, Validators.required],
      dob: [this.user.dob, Validators.required],
    });
  }

  ionViewDidLoad() {
  }

  updatePersonalInformation(){
    this.PersonalInfoSubmitAttempt = true;
    if(this.account.valid)
    this.usersProvider.update(this.account.value).then(data => {
      if(data != {})
        this.presentToast("Personal Information has been sucesfully updated");
      else
        this.presentToast("Unable to update information. Please try again");
    });
  }

  updatePassword(){
    this.PasswordSubmitAttempt = true;

    if(this.curpassword !== this.user.password)
      this.currentPasswordValid = false;
    else
      this.currentPasswordValid = true;
    
    if(this.newpassword !== this.conpassword)
      this.newPasswordValid = false;
    else
      this.newPasswordValid = true;

    if(this.newpassword == "")
      this.newPasswordNotEmpty = false;
    else
      this.newPasswordNotEmpty = true;
    
    if(this.currentPasswordValid && this.newPasswordValid && this.newPasswordNotEmpty){
      let data = {
        "id": this.user.id,
        "password": this.newpassword
      }
      this.usersProvider.update(data).then(data => {
        if(data != {}){
          this.curpassword = "";
          this.newpassword = "";
          this.conpassword = "";
          this.presentToast("Password has been sucesfully updated")
        }
        else
          this.presentToast("Unable to update information. Please try again")
      });
    }
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }

}
