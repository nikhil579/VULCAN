import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ListingtermMaster extends Entity {
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
  ListingTermType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListingtermMaster>) {
    super(data);
  }
}

export interface ListingtermMasterRelations {
  // describe navigational properties here
}

export type ListingtermMasterWithRelations = ListingtermMaster & ListingtermMasterRelations;
