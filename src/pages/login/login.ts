import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from 'ionic-angular';
// import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';
// import { SignupPage } from '../signup/signup.page';
// import { ResetPasswordPage } from '../reset-password/reset-password.page';

@Component({
	selector: 'as-page-login',
	templateUrl: './login.html'
})
export class LoginPage {
	form: FormGroup;
	loginError: string;
	user: firebase.User;

	constructor(
		private navCtrl: NavController,
		// private auth: AuthService,
		private auth: AngularFireAuth,
		fb: FormBuilder
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required])]
		});
	}

	login() {
		let data = this.form.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};

		this.auth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(
				() => this.navCtrl.setRoot(TabsPage),
				error => this.loginError = error.message
			);


	}

	// this.auth.signInWithEmail(credentials)
	// 	.then(
	// 		() => this.navCtrl.setRoot(HomePage),
	// 		error => this.loginError = error.message
	// 	);
	//
	// signup() {
	// 	this.navCtrl.push(SignupPage);
	// }
	//
	// resetPassword() {
	// 	this.navCtrl.push(ResetPasswordPage);
	// }
}
