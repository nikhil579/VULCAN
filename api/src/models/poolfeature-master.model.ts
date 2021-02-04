import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PoolfeatureMaster extends Entity {
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
  PoolFeatureType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PoolfeatureMaster>) {
    super(data);
  }
}

export interface PoolfeatureMasterRelations {
  // describe navigational properties here
}

export type PoolfeatureMasterWithRelations = PoolfeatureMaster & PoolfeatureMasterRelations;
