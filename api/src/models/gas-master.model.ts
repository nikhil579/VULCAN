import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class GasMaster extends Entity {
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
  GasType: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<GasMaster>) {
    super(data);
  }
}

export interface GasMasterRelations {
  // describe navigational properties here
}

export type GasMasterWithRelations = GasMaster & GasMasterRelations;
