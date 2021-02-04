import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ParkingfeatureMaster} from '../models';
import {ParkingfeatureMasterRepository} from '../repositories';

export class ParkingFeatureMasterController {
  constructor(
    @repository(ParkingfeatureMasterRepository)
    public parkingfeatureMasterRepository : ParkingfeatureMasterRepository,
  ) {}

  @post('/parkingfeature-masters', {
    responses: {
      '200': {
        description: 'ParkingfeatureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(ParkingfeatureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ParkingfeatureMaster, {
            title: 'NewParkingfeatureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    parkingfeatureMaster: Omit<ParkingfeatureMaster, 'id'>,
  ): Promise<ParkingfeatureMaster> {
    return this.parkingfeatureMasterRepository.create(parkingfeatureMaster);
  }

  @get('/parkingfeature-masters/count', {
    responses: {
      '200': {
        description: 'ParkingfeatureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ParkingfeatureMaster) where?: Where<ParkingfeatureMaster>,
  ): Promise<Count> {
    return this.parkingfeatureMasterRepository.count(where);
  }

  @get('/parkingfeature-masters', {
    responses: {
      '200': {
        description: 'Array of ParkingfeatureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ParkingfeatureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ParkingfeatureMaster) filter?: Filter<ParkingfeatureMaster>,
  ): Promise<ParkingfeatureMaster[]> {
    return this.parkingfeatureMasterRepository.find(filter);
  }

  @patch('/parkingfeature-masters', {
    responses: {
      '200': {
        description: 'ParkingfeatureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ParkingfeatureMaster, {partial: true}),
        },
      },
    })
    parkingfeatureMaster: ParkingfeatureMaster,
    @param.where(ParkingfeatureMaster) where?: Where<ParkingfeatureMaster>,
  ): Promise<Count> {
    return this.parkingfeatureMasterRepository.updateAll(parkingfeatureMaster, where);
  }

  @get('/parkingfeature-masters/{id}', {
    responses: {
      '200': {
        description: 'ParkingfeatureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ParkingfeatureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ParkingfeatureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ParkingfeatureMaster>
  ): Promise<ParkingfeatureMaster> {
    return this.parkingfeatureMasterRepository.findById(id, filter);
  }

  @patch('/parkingfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'ParkingfeatureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ParkingfeatureMaster, {partial: true}),
        },
      },
    })
    parkingfeatureMaster: ParkingfeatureMaster,
  ): Promise<void> {
    await this.parkingfeatureMasterRepository.updateById(id, parkingfeatureMaster);
  }

  @put('/parkingfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'ParkingfeatureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() parkingfeatureMaster: ParkingfeatureMaster,
  ): Promise<void> {
    await this.parkingfeatureMasterRepository.replaceById(id, parkingfeatureMaster);
  }

  @del('/parkingfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'ParkingfeatureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.parkingfeatureMasterRepository.deleteById(id);
  }
}
