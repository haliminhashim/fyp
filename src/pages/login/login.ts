import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  Events,
} from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { HomePage } from "../home/home";
import { UsersProvider } from "../../providers/users/users";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { BigchaindbProvider } from "../../providers/bigchaindb/bigchaindb";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  loginForm: FormGroup;
  submitAttempt;
  constructor(
    public bigchaindbProvider: BigchaindbProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersProvider: UsersProvider,
    public toastCtrl: ToastController,
    public events: Events,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.email, Validators.required])],
      password: ["", Validators.required]
    });
    this.submitAttempt = false;
  }

  public gotoSignup() {
    this.navCtrl.push(SignupPage);
  }

  public login() {
    this.submitAttempt = true;
    this.usersProvider.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).then(data => {
      if (data) {
        this.events.publish("user:login", data);
        this.navCtrl.setRoot(HomePage);
      } else this.presentToast("Invalid Email / Password");
    })
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

  // getTransaction(id){
  //   this.bigchaindbProvider.getTrasanction(id).then(data => {
  //     console.log(data);
  //   });
  // }

  // searchTransaction(query){
  //   this.bigchaindbProvider.searchTransaction(query).then(data => {
  //     console.log(data);
  //   });
  // }
}
