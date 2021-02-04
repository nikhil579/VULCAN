import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class SyndicatetoMaster extends Entity {
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
  SyndicateToType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SyndicatetoMaster>) {
    super(data);
  }
}

export interface SyndicatetoMasterRelations {
  // describe navigational properties here
}

export type SyndicatetoMasterWithRelations = SyndicatetoMaster & SyndicatetoMasterRelations;
