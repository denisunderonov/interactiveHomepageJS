class List {
    constructor(type, values) {
        this.type = type;
        this.values = values
    }
}

export class Checklist extends List {
    constructor(type, values){
        super(type, values);
    }
}

export class Notelist extends List {
    constructor(type, values){
        super(type, values);
    }
}

