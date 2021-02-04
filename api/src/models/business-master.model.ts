import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class BusinessMaster extends Entity {
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
  BusinessType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BusinessMaster>) {
    super(data);
  }
}

export interface BusinessMasterRelations {
  // describe navigational properties here
}

export type BusinessMasterWithRelations = BusinessMaster & BusinessMasterRelations;
