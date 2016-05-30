class WishListItem {
	constructor(name, price, dateAdded) {
		this.name = name;
		this.price = price;
		this.dateAdded = dateAdded;
	}

	get name() {
		return this.name;
	}

	get price() {
		return this.price;
	}

	get dateAdded() {
		return this.dateAdded;
	}

	set Name(newName) {
		this.name = newName;
	}

	set price(newPrice) {
		this.price = newPrice;
	}

	set dateAdded(newDateAdded) {
		this.dateAdded = newDateAdded;
	}
}
