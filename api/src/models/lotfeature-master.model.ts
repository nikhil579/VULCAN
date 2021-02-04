import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class LotfeatureMaster extends Entity {
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
  LotFeatureType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LotfeatureMaster>) {
    super(data);
  }
}

export interface LotfeatureMasterRelations {
  // describe navigational properties here
}

export type LotfeatureMasterWithRelations = LotfeatureMaster & LotfeatureMasterRelations;
