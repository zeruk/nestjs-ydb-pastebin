import {
  declareType,
  snakeToCamelCaseConversion,
  TypedData,
  Types,
  withTypeOptions,
} from 'ydb-sdk';

export interface IPastebin {
  id: string;
  text: string;
  type: string;
  visibility: string;
}

@withTypeOptions({ namesConversion: snakeToCamelCaseConversion })
export class Pastebin extends TypedData {
  @declareType(Types.UTF8)
  public id: string;

  @declareType(Types.optional(Types.UTF8))
  public text: string;

  @declareType(Types.UTF8)
  public type: string;

  @declareType(Types.UTF8)
  public visibility: string;

  @declareType(Types.DATE)
  public created: Date;

  constructor(data: IPastebin) {
    super(data);
    this.id = data.id;
    this.text = data.text;
    this.type = data.type;
    this.visibility = data.visibility;
    this.created = new Date();
  }
}
