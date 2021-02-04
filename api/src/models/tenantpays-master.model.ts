import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TenantpaysMaster extends Entity {
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
  TenantPays: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TenantpaysMaster>) {
    super(data);
  }
}

export interface TenantpaysMasterRelations {
  // describe navigational properties here
}

export type TenantpaysMasterWithRelations = TenantpaysMaster & TenantpaysMasterRelations;
