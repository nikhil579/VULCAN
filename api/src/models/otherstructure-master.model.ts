import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class OtherstructureMaster extends Entity {
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
  OtherStructureType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OtherstructureMaster>) {
    super(data);
  }
}

export interface OtherstructureMasterRelations {
  // describe navigational properties here
}

export type OtherstructureMasterWithRelations = OtherstructureMaster & OtherstructureMasterRelations;
