import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class SeverMaster extends Entity {
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
  SewerType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SeverMaster>) {
    super(data);
  }
}

export interface SeverMasterRelations {
  // describe navigational properties here
}

export type SeverMasterWithRelations = SeverMaster & SeverMasterRelations;
