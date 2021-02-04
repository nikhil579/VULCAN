import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class HeatingMaster extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  HeatingType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HeatingMaster>) {
    super(data);
  }
}

export interface HeatingMasterRelations {
  // describe navigational properties here
}

export type HeatingMasterWithRelations = HeatingMaster & HeatingMasterRelations;
