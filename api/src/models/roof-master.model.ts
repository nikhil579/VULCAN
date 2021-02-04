import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RoofMaster extends Entity {
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
  RoofType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RoofMaster>) {
    super(data);
  }
}

export interface RoofMasterRelations {
  // describe navigational properties here
}

export type RoofMasterWithRelations = RoofMaster & RoofMasterRelations;
