import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private intercom: Intercom) {

  }
  launch(){
    this.intercom.setLauncherVisibility('VISIBLE');
}
  unread() {
    this.intercom.unreadConversationCount();
  }
  visible() {
    this.intercom.displayMessenger();
  }
}
