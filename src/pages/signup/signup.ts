import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsersProvider } from '../../providers/users/users';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validators';
import { BigchaindbProvider } from '../../providers/bigchaindb/bigchaindb';
//import { EmailValidator } from '../../validators/email.validators';

@IonicPage({
  segment: 'signup'
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;

  constructor(public bigchaindbProvider: BigchaindbProvider, public navCtrl: NavController, public navParams: NavParams, public usersProvider: UsersProvider, public toastCtrl: ToastController, public formBuilder: FormBuilder) {
    
  }

  ionViewWillLoad() {
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
    });
  }

  validation_messages = {
    'firstname': [
      { type: 'required', message: 'First Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
      //{ type: 'validEmail', message: 'An account with the email already exist.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch' }
    ],
  };
  
  onSubmit(values){
    let json = {
      "id": null,
      "email": values.email,
      "firstname": values.firstname,
      "lastname": values.lastname,
      "password": values.matching_passwords.password,
      "gender": "",
      "dob": "",
      "defaultBillingAddress": null,
      "defaultShippingAddress": null,
      "keys": this.bigchaindbProvider.createKeys()
    }
    this.usersProvider.create(json).then(data => {
      if(data){
        this.presentToast("Account has been created");
        this.gotoLogin();
      }
      else
      this.presentToast("Unable to create account. Please try again");
    });
  }

  public gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
