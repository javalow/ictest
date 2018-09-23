import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Intercom } from '@ionic-native/intercom';


import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../services/auth.service';
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
//   rootPage;
//
//   constructor(
//     public platform: Platform,
//     // statusBar: StatusBar,
//     private intercom: Intercom,
//     private auth: AuthService) {
//     this.platform = platform;
//
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       // statusBar.styleDefault();
//       this.auth.afAuth.authState
//         .subscribe(
//           user => {
//             if (user) {
//               this.rootPage = TabsPage;
//             } else {
//               this.rootPage = LoginPage;
//             }
//           },
//           () => {
//             this.rootPage = LoginPage;
//           }
//         );
//
//       this.intercom.registerIdentifiedUser({email:"j@avalow.com"});
//       this.intercom.registerForPush();
//
//
//   }
// }
  // pages;
	rootPage;


	// private platform;
	// private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(

		private platform: Platform,
		// menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService,
		private intercom: Intercom) {
      // this.menu = menu;

      		this.platform = platform;
      		this.initializeApp();

      		// set our app's pages
      		// this.pages = [
      		// 	{ title: 'Home', component: TabsPage, icon: 'home' },
      		// 	{ title: 'Garden Chat', component: ContactPage, icon: 'chatbubbles' },
      		// 	// { title: 'Recipes & Tips', component: NewsListPage, icon: 'paper' },
      		// 	// { title: 'Homework', component: CatalogItemsPage, icon: 'list-box' },
      		// 	// { title: 'Garden Items', component: ProductsPage, icon: 'cart' },
      		// 	// { title: 'Food Menu', component: MenuItemsPage, icon: 'menu' },
      		// 	{ title: 'Garden Sharing', component: AboutPage, icon: 'list' },
      		// 	// { title: 'Garden Details', component: UserProfilesPage, icon: 'people' }
      		// 	// { title: 'Real Estate', component: PropertiesPage, icon: 'book' },
      		// 	// { title: 'Galleries', component: GalleriesPage, icon: 'images' },
          //
      		// ];
      	}

      	initializeApp() {
      		this.platform.ready().then(() => {
      			this.statusBar.styleDefault();
      		});

      		this.auth.afAuth.authState
      			.subscribe(
      				user => {
      					if (user) {
      						this.rootPage = TabsPage;
      					} else {
      						this.rootPage = WelcomePage;
      					}
      				},
      				() => {
      					this.rootPage = WelcomePage;
      				}
      			);
      			// this.intercom.registerIdentifiedUser({email:this.auth.getEmail});
            this.intercom.registerIdentifiedUser("j@avalow.com");
      			this.intercom.registerForPush();

      	}

      	// openPage(page) {
      	// 	this.menu.close();
      	// 	this.nav.setRoot(page.component);
      	// 	//intercom.registerIdentifiedUser({email: this.auth.getEmail});
      	// }
        //
      	// logout() {
      	// 	this.menu.close();
        //
      	// 	this.auth.signOut();
      	// 	this.nav.setRoot(WelcomePage);
      	// }
        //
      	// login() {
      	// 	this.menu.close();
        //
      	// 	this.auth.signOut();
      	// 	this.nav.setRoot(LoginPage);
      	// }
      }


// original page code
// export class MyApp {
//   rootPage:any = TabsPage;
//   constructor(platform: Platform, statusBar: StatusBar, private intercom: Intercom) {
//     platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       statusBar.styleDefault();
//
//       this.intercom.registerIdentifiedUser({email:"j@avalow.com"});
//       this.intercom.registerForPush();
//       // this.intercom.setLauncherVisibility('VISIBLE');
//
//     });
//   }
// }
