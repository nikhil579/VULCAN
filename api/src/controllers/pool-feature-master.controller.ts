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
import {PoolfeatureMaster} from '../models';
import {PoolfeatureMasterRepository} from '../repositories';

export class PoolFeatureMasterController {
  constructor(
    @repository(PoolfeatureMasterRepository)
    public poolfeatureMasterRepository : PoolfeatureMasterRepository,
  ) {}

  @post('/poolfeature-masters', {
    responses: {
      '200': {
        description: 'PoolfeatureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(PoolfeatureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PoolfeatureMaster, {
            title: 'NewPoolfeatureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    poolfeatureMaster: Omit<PoolfeatureMaster, 'id'>,
  ): Promise<PoolfeatureMaster> {
    return this.poolfeatureMasterRepository.create(poolfeatureMaster);
  }

  @get('/poolfeature-masters/count', {
    responses: {
      '200': {
        description: 'PoolfeatureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PoolfeatureMaster) where?: Where<PoolfeatureMaster>,
  ): Promise<Count> {
    return this.poolfeatureMasterRepository.count(where);
  }

  @get('/poolfeature-masters', {
    responses: {
      '200': {
        description: 'Array of PoolfeatureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PoolfeatureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PoolfeatureMaster) filter?: Filter<PoolfeatureMaster>,
  ): Promise<PoolfeatureMaster[]> {
    return this.poolfeatureMasterRepository.find(filter);
  }

  @patch('/poolfeature-masters', {
    responses: {
      '200': {
        description: 'PoolfeatureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PoolfeatureMaster, {partial: true}),
        },
      },
    })
    poolfeatureMaster: PoolfeatureMaster,
    @param.where(PoolfeatureMaster) where?: Where<PoolfeatureMaster>,
  ): Promise<Count> {
    return this.poolfeatureMasterRepository.updateAll(poolfeatureMaster, where);
  }

  @get('/poolfeature-masters/{id}', {
    responses: {
      '200': {
        description: 'PoolfeatureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PoolfeatureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PoolfeatureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PoolfeatureMaster>
  ): Promise<PoolfeatureMaster> {
    return this.poolfeatureMasterRepository.findById(id, filter);
  }

  @patch('/poolfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'PoolfeatureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PoolfeatureMaster, {partial: true}),
        },
      },
    })
    poolfeatureMaster: PoolfeatureMaster,
  ): Promise<void> {
    await this.poolfeatureMasterRepository.updateById(id, poolfeatureMaster);
  }

  @put('/poolfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'PoolfeatureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() poolfeatureMaster: PoolfeatureMaster,
  ): Promise<void> {
    await this.poolfeatureMasterRepository.replaceById(id, poolfeatureMaster);
  }

  @del('/poolfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'PoolfeatureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.poolfeatureMasterRepository.deleteById(id);
  }
}
