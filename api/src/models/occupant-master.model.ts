import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class OccupantMaster extends Entity {
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
  OccupantType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OccupantMaster>) {
    super(data);
  }
}

export interface OccupantMasterRelations {
  // describe navigational properties here
}

export type OccupantMasterWithRelations = OccupantMaster & OccupantMasterRelations;
