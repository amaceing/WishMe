class WishListItem {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	getName() {
		return this.name;
	}

	getPrice() {
		return this.price;
	}

	setName(newName) {
		this.name = newName;
	}

	setPrice(newPrice) {
		this.price = newPrice;
	}
}
