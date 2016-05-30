class WishListItem {
	constructor(name, price, dateAdded) {
		this._name = name;
		this._price = price;
		this._dateAdded = dateAdded;
	}

	get name() {
		return this._name;
	}

	get price() {
		return this._price;
	}

	get dateAdded() {
		return this._dateAdded;
	}

	set name(newName) {
		this._name = newName;
	}

	set price(newPrice) {
		this._price = newPrice;
	}

	set dateAdded(newDateAdded) {
		this._dateAdded = newDateAdded;
	}
}
