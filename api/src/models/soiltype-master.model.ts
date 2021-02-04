import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class SoiltypeMaster extends Entity {
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
  SoilTypeType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SoiltypeMaster>) {
    super(data);
  }
}

export interface SoiltypeMasterRelations {
  // describe navigational properties here
}

export type SoiltypeMasterWithRelations = SoiltypeMaster & SoiltypeMasterRelations;
