class WishListItem {
	constructor(name, price, dateAdded) {
		this.name = name;
		this.price = price;
		this.dateAdded = dateAdded;
	}

	getName() {
		return this.name;
	}

	getPrice() {
		return this.price;
	}

	getDateAdded() {
		return this.dateAdded;
	}

	setName(newName) {
		this.name = newName;
	}

	setPrice(newPrice) {
		this.price = newPrice;
	}

	setDateAdded(newDateAdded) {
		this.dateAdded = newDateAdded;
	}
}
