import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { DataService } from '../../services/data.service';
import { AboutPage } from '../about/about';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsRef: AngularFireList<any>;
    items: Observable<any[]>;
    constructor(db: AngularFireDatabase, nav: NavController) {
      this.itemsRef = db.list('ftproducts');
      // Use snapshotChanges().map() to store the key
      this.items = this.itemsRef.snapshotChanges();
  }

    // public itemTapped(items) {
  	// 	this.NavController.push(AboutPage, {
  	// 		item: this.itemsRef
  	// 	});
  }
