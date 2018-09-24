import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DataService } from '../../services/data.service';
import { AboutPage } from '../about/about';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any [] = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/ftproducts');

constructor(){}
ionViewDidLoad() {
  this.itemRef.on('value', itemSnapshot => {
    this.items = [];
    itemSnapshot.forEach( itemSnap => {
      this.items.push(itemSnap.val());
      return false;
  });
})
}
}
// 	items$: AngularFireList<{}>;
//   // item;
//   productList;
//
// 	constructor(data: DataService, private nav: NavController) {
// 		this.items$ = data.getProducts();
//     // this.item = this.items$[0];
//     this.productList.forEach(snap => {
//         this.productList.push({
//           id: snap.key,
//           name: snap.val().title,
//           desc: snap.val().body,
//           price: snap.val().price,
//         });
// 	})
// }
// }

	// public itemTapped(item) {
	// 	this.nav.push(AboutPage, {
	// 		item: item
	// 	});
	// }
// export class HomePage {
//   itemsRef: AngularFireList<any>;
//     items: Observable<any[]>;
//     private nav;
//     constructor(db: AngularFireDatabase, nav: NavController) {
//       this.itemsRef = db.list('ftproducts');
//       // Use snapshotChanges().map() to store the key
//       this.items = this.itemsRef.snapshotChanges().map(
//
//     );
//       this.nav = nav;
//   }
//
//     public itemTapped(items) {
//   		this.nav.push(AboutPage, {
//   			item: this.itemsRef
//   		});
//   }
