import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { Intercom } from '@ionic-native/intercom';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private auth: AuthService,private intercom: Intercom) {
    this.intercom.registerIdentifiedUser({email:this.auth.getEmail});
    this.intercom.registerForPush();
  }

}
