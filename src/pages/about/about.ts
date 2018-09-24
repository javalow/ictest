import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo/photo';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  currentImage: any;
 constructor(public navCtrl: NavController, public photoService: PhotoProvider, private auth: AuthService) {
}
ngOnInit() {
   this.photoService.loadSaved();
}



}
