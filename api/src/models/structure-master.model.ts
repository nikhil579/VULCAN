import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class StructureMaster extends Entity {
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
  StructureType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<StructureMaster>) {
    super(data);
  }
}

export interface StructureMasterRelations {
  // describe navigational properties here
}

export type StructureMasterWithRelations = StructureMaster & StructureMasterRelations;
