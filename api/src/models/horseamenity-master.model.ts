import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class HorseamenityMaster extends Entity {
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
  HorseAmenityType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HorseamenityMaster>) {
    super(data);
  }
}

export interface HorseamenityMasterRelations {
  // describe navigational properties here
}

export type HorseamenityMasterWithRelations = HorseamenityMaster & HorseamenityMasterRelations;
