class WishList {
	constructor(name, type, dateCreated, dateModified) {
		this._name = name;
		this._type = type;
		this._dateCreated = dateCreated;
		this._dateModified = dateModified;
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


}
