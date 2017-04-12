class WishList {

	constructor(name, type, dateCreated, dateModified, wishListItems) {
		this._name = name;
		this._type = type;
		this._dateCreated = dateCreated;
		this._dateModified = dateModified;
		this._wishListItems = wishListItems;
		// this._storageRef = firebase.database().ref('wishLists/' + this._name);
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	get type() {
		return this._type;
	}

	set type(newType) {
		this._type = newType;
	}

	get dateCreated() {
		return this._dateCreated;
	}

	set dateCreated(newDateCreated) {
		this._dateCreated = newDateCreated;
	}

	get dateModified() {
		return this._dateModified;
	}

	set dateModified(newDateModified) {
		this._dateModified = newDateModified;
	}

	get wishListItems() {
		return this._wishListItems;
	}

	set wishListItems(newWishListItems) {
		this._wishListItems = newWishListItems;
	}

	saveList() {
		console.log("save");
		var wishListsRef = firebase.database().ref('wishLists/');
		console.log(wishListsRef);
		wishListsRef.set(this);
	}
}
