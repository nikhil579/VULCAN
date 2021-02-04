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
import {DoorfeatureMaster} from '../models';
import {DoorfeatureMasterRepository} from '../repositories';

export class DoorFeatureMasterController {
  constructor(
    @repository(DoorfeatureMasterRepository)
    public doorfeatureMasterRepository : DoorfeatureMasterRepository,
  ) {}

  @post('/doorfeature-masters', {
    responses: {
      '200': {
        description: 'DoorfeatureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(DoorfeatureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DoorfeatureMaster, {
            title: 'NewDoorfeatureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    doorfeatureMaster: Omit<DoorfeatureMaster, 'id'>,
  ): Promise<DoorfeatureMaster> {
    return this.doorfeatureMasterRepository.create(doorfeatureMaster);
  }

  @get('/doorfeature-masters/count', {
    responses: {
      '200': {
        description: 'DoorfeatureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DoorfeatureMaster) where?: Where<DoorfeatureMaster>,
  ): Promise<Count> {
    return this.doorfeatureMasterRepository.count(where);
  }

  @get('/doorfeature-masters', {
    responses: {
      '200': {
        description: 'Array of DoorfeatureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DoorfeatureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DoorfeatureMaster) filter?: Filter<DoorfeatureMaster>,
  ): Promise<DoorfeatureMaster[]> {
    return this.doorfeatureMasterRepository.find(filter);
  }

  @patch('/doorfeature-masters', {
    responses: {
      '200': {
        description: 'DoorfeatureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DoorfeatureMaster, {partial: true}),
        },
      },
    })
    doorfeatureMaster: DoorfeatureMaster,
    @param.where(DoorfeatureMaster) where?: Where<DoorfeatureMaster>,
  ): Promise<Count> {
    return this.doorfeatureMasterRepository.updateAll(doorfeatureMaster, where);
  }

  @get('/doorfeature-masters/{id}', {
    responses: {
      '200': {
        description: 'DoorfeatureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DoorfeatureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DoorfeatureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<DoorfeatureMaster>
  ): Promise<DoorfeatureMaster> {
    return this.doorfeatureMasterRepository.findById(id, filter);
  }

  @patch('/doorfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'DoorfeatureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DoorfeatureMaster, {partial: true}),
        },
      },
    })
    doorfeatureMaster: DoorfeatureMaster,
  ): Promise<void> {
    await this.doorfeatureMasterRepository.updateById(id, doorfeatureMaster);
  }

  @put('/doorfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'DoorfeatureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() doorfeatureMaster: DoorfeatureMaster,
  ): Promise<void> {
    await this.doorfeatureMasterRepository.replaceById(id, doorfeatureMaster);
  }

  @del('/doorfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'DoorfeatureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.doorfeatureMasterRepository.deleteById(id);
  }
}
