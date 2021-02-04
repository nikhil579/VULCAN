import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class FlooringMaster extends Entity {
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
  FlooringType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FlooringMaster>) {
    super(data);
  }
}

export interface FlooringMasterRelations {
  // describe navigational properties here
}

export type FlooringMasterWithRelations = FlooringMaster & FlooringMasterRelations;
