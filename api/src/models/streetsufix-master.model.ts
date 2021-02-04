import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class StreetsufixMaster extends Entity {
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
  StreetSufixType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<StreetsufixMaster>) {
    super(data);
  }
}

export interface StreetsufixMasterRelations {
  // describe navigational properties here
}

export type StreetsufixMasterWithRelations = StreetsufixMaster & StreetsufixMasterRelations;
