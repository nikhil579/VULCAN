import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class WatersourceMaster extends Entity {
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
  WaterSourceType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WatersourceMaster>) {
    super(data);
  }
}

export interface WatersourceMasterRelations {
  // describe navigational properties here
}

export type WatersourceMasterWithRelations = WatersourceMaster & WatersourceMasterRelations;
