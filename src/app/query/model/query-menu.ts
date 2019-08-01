export class QueryMenu {
    name: string;
    items: QueryMenuItem[];

    constructor(name: string, items: QueryMenuItem[]) {
        this.name = name;
        this.items = items;
    }
}

export class QueryMenuItem {
    name: string;
    path: string;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}
