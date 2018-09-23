import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
	selector: 'as-page-welcome',
	templateUrl: './welcome.page.html'
})

export class WelcomePage {
	// @ViewChild('slides') slides: Slides;
	//
	// constructor(
	// 	public navCtrl: NavController,
	// 	public menu: MenuController
	// ) {
	// }
	//
	// startApp() {
	// 	this.navCtrl.setRoot(HomePage);
	// }
	//
	// login() {
	// 	this.navCtrl.push(LoginPage);
	// }
	//
	// ionViewWillEnter() {
	// 	this.slides.update();
	// }
	//
	// ionViewDidEnter() {
	// 	this.menu.enable(false);
	// }
	//
	// ionViewDidLeave() {
	// 	this.menu.enable(true);
	// }

}
