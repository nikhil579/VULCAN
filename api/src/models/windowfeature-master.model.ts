import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class WindowfeatureMaster extends Entity {
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
  WindowFeatureType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WindowfeatureMaster>) {
    super(data);
  }
}

export interface WindowfeatureMasterRelations {
  // describe navigational properties here
}

export type WindowfeatureMasterWithRelations = WindowfeatureMaster & WindowfeatureMasterRelations;
