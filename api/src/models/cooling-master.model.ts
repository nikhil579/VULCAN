import {Entity, model, property} from '@loopback/repository';

@model()
export class CoolingMaster extends Entity {
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
  CoolingType: string;


  constructor(data?: Partial<CoolingMaster>) {
    super(data);
  }
}

export interface CoolingMasterRelations {
  // describe navigational properties here
}

export type CoolingMasterWithRelations = CoolingMaster & CoolingMasterRelations;
