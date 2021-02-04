import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ApplicanceMaster extends Entity {
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
  ApplianceType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ApplicanceMaster>) {
    super(data);
  }
}

export interface ApplicanceMasterRelations {
  // describe navigational properties here
}

export type ApplicanceMasterWithRelations = ApplicanceMaster & ApplicanceMasterRelations;
