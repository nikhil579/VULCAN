import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CommonwallMaster extends Entity {
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
  CommonWallType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CommonwallMaster>) {
    super(data);
  }
}

export interface CommonwallMasterRelations {
  // describe navigational properties here
}

export type CommonwallMasterWithRelations = CommonwallMaster & CommonwallMasterRelations;
