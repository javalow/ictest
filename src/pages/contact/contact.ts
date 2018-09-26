import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Intercom } from '@ionic-native/intercom';
// import { Badge } from '@ionic-native/badge';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {




  constructor(public navCtrl: NavController, public intercom: Intercom) {}
  ionViewDidLoad() {
    this.intercom.displayConversationsList();
      console.log('intercom display conversation list on load');

  }

  launch(){
    this.intercom.displayMessenger();
    console.log('intercom display messenger launched');
}
  unread() {
    this.intercom.unreadConversationCount();
  }
  visible() {
    this.intercom.displayMessageComposer();
    console.log('intercom display message composer launched');
  }
  conversations() {
  this.intercom.displayConversationsList();
    console.log('intercom display conversation list');
}
}
