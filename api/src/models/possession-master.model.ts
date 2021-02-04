import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PossessionMaster extends Entity {
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
  PossessionType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PossessionMaster>) {
    super(data);
  }
}

export interface PossessionMasterRelations {
  // describe navigational properties here
}

export type PossessionMasterWithRelations = PossessionMaster & PossessionMasterRelations;
