import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class OtherequipmentMaster extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  OtherEquipmentType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OtherequipmentMaster>) {
    super(data);
  }
}

export interface OtherequipmentMasterRelations {
  // describe navigational properties here
}

export type OtherequipmentMasterWithRelations = OtherequipmentMaster & OtherequipmentMasterRelations;
