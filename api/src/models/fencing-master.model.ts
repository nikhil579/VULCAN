import {Entity, model, property} from '@loopback/repository';

@model()
export class FencingMaster extends Entity {
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
  FencingMaster: string;


  constructor(data?: Partial<FencingMaster>) {
    super(data);
  }
}

export interface FencingMasterRelations {
  // describe navigational properties here
}

export type FencingMasterWithRelations = FencingMaster & FencingMasterRelations;
