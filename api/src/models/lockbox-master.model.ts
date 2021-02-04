import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class LockboxMaster extends Entity {
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
  LockBoxType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LockboxMaster>) {
    super(data);
  }
}

export interface LockboxMasterRelations {
  // describe navigational properties here
}

export type LockboxMasterWithRelations = LockboxMaster & LockboxMasterRelations;
