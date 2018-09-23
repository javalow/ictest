import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable()
export class DataService {
	constructor(private db: AngularFireDatabase) {
	}

	getActivityFeed(): AngularFireList<any[]> {
		return this.db.list('ftactivityfeed');
	}

	getNewsList(): AngularFireList<any[]> {
		return this.db.list('ftnews');
	}

	getCatalogItems() {
		return this.db.list('ftcatalogitems');
	}

	getProducts() {
		return this.db.list('ftproducts');
	}

	getMenuItems() {
		return this.db.list('ftmenuitems');
	}

	getUserProfiles() {
		return this.db.list('ftuserprofiles');
	}

	getProperties() {
		return this.db.list('ftproperties');
	}

	getGalleries() {
		return this.db.list('ftphotogalleries');
	}

	getChatRooms() {
		return this.db.list('ftchatrooms');
	}

	getChatMessages(chatId: string) {
		return this.db.list(`ftchatrooms/${chatId}/messages`);
	}
}
