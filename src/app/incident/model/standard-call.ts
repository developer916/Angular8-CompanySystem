
export class StandardCall {

  private _name: string;

  private _title: string;

  private _type: string;

  private _category: string;

  private _callItems: StandardCallItem[];


  constructor(name: string, title: string, type: string, category: string, callItems: StandardCallItem[]) {
    this._name = name;
    this._title = title;
    this._type = type;
    this._category = category;
    this._callItems = callItems;
  }


  get name(): string {
    return this._name;
  }

  get title(): string {
    return this._title;
  }

  get type(): string {
    return this._type;
  }

  get category(): string {
    return this._category;
  }

  get callItems(): StandardCallItem[] {
    return this._callItems;
  }
}

export class StandardCallItem {

  private _sessionName: string;

  private _controlName: string;

  private _value: string;


  constructor(sessionName: string, controlName: string, value: string) {
    this._sessionName = sessionName;
    this._controlName = controlName;
    this._value = value;
  }

  get sessionName(): string {
    return this._sessionName;
  }

  get controlName(): string {
    return this._controlName;
  }

  get value(): string {
    return this._value;
  }
}
