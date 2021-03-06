import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PropertyMaster extends Entity {
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
  PropertyType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PropertyMaster>) {
    super(data);
  }
}

export interface PropertyMasterRelations {
  // describe navigational properties here
}

export type PropertyMasterWithRelations = PropertyMaster & PropertyMasterRelations;
