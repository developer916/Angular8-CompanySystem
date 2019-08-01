export enum NarrativeType {
  RESPONSIBLE_FOR,
  SHORT
}

export class NarrativeTemplate {

  private _name: string;
  private _session: string;
  private _type: NarrativeType;
  private _templateString: string;


  constructor(name: string, session: string, type: string, templateString: string[]) {
    this._name = name;
    this._session = session;
    this._type = NarrativeType[type];
    this._templateString = templateString.join('\n');
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get session(): string {
    return this._session;
  }

  set session(value: string) {
    this._session = value;
  }

  get type(): NarrativeType {
    return this._type;
  }

  set type(value: NarrativeType) {
    this._type = value;
  }

  get templateString(): string {
    return this._templateString;
  }

  set templateString(value: string) {
    this._templateString = value;
  }
}
