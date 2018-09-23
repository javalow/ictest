import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// import AuthProvider = firebase.auth.AuthProvider;
// import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	getName() {
		// return this.user && (this.user.displayName);
		return "Ava";
	}

	// getUsername() {
	// 	return this.user.email;
	// }

	getEmail() {
		// return this.user && this.user.email;
		return "j@avalow.com";
	}

	// get authenticated(): boolean {
	// 	return this.user !== null;
	// }
	//
	// get id(): string {
	// 	return this.authenticated ? this.user.uid : '';
	// }

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	signOut() {
		this.afAuth.auth.signOut();
	}


	resetPassword(email: string) {
		return this.afAuth.auth.sendPasswordResetEmail(email);
	}

}


// signOut(): firebase.Promise<void> {
// 	return this.afAuth.auth.signOut();
// }

// signInWithGoogle() {
// 	console.log('Sign in with google');
// 	return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
// }
//
// signInWithTwitter() {
// 	console.log('Sign in with twitter');
// 	return this.oauthSignIn(new firebase.auth.TwitterAuthProvider());
// }
