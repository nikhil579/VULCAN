import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UtilityMaster extends Entity {
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
  UtilityType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UtilityMaster>) {
    super(data);
  }
}

export interface UtilityMasterRelations {
  // describe navigational properties here
}

export type UtilityMasterWithRelations = UtilityMaster & UtilityMasterRelations;
