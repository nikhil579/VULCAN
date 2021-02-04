import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ParkingfeatureMaster extends Entity {
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
  ParkingFeatureType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ParkingfeatureMaster>) {
    super(data);
  }
}

export interface ParkingfeatureMasterRelations {
  // describe navigational properties here
}

export type ParkingfeatureMasterWithRelations = ParkingfeatureMaster & ParkingfeatureMasterRelations;
