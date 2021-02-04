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
import {LaundryfeatureMaster} from '../models';
import {LaundryfeatureMasterRepository} from '../repositories';

export class LaundryFeatureMasterController {
  constructor(
    @repository(LaundryfeatureMasterRepository)
    public laundryfeatureMasterRepository : LaundryfeatureMasterRepository,
  ) {}

  @post('/laundryfeature-masters', {
    responses: {
      '200': {
        description: 'LaundryfeatureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(LaundryfeatureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LaundryfeatureMaster, {
            title: 'NewLaundryfeatureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    laundryfeatureMaster: Omit<LaundryfeatureMaster, 'id'>,
  ): Promise<LaundryfeatureMaster> {
    return this.laundryfeatureMasterRepository.create(laundryfeatureMaster);
  }

  @get('/laundryfeature-masters/count', {
    responses: {
      '200': {
        description: 'LaundryfeatureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(LaundryfeatureMaster) where?: Where<LaundryfeatureMaster>,
  ): Promise<Count> {
    return this.laundryfeatureMasterRepository.count(where);
  }

  @get('/laundryfeature-masters', {
    responses: {
      '200': {
        description: 'Array of LaundryfeatureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(LaundryfeatureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(LaundryfeatureMaster) filter?: Filter<LaundryfeatureMaster>,
  ): Promise<LaundryfeatureMaster[]> {
    return this.laundryfeatureMasterRepository.find(filter);
  }

  @patch('/laundryfeature-masters', {
    responses: {
      '200': {
        description: 'LaundryfeatureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LaundryfeatureMaster, {partial: true}),
        },
      },
    })
    laundryfeatureMaster: LaundryfeatureMaster,
    @param.where(LaundryfeatureMaster) where?: Where<LaundryfeatureMaster>,
  ): Promise<Count> {
    return this.laundryfeatureMasterRepository.updateAll(laundryfeatureMaster, where);
  }

  @get('/laundryfeature-masters/{id}', {
    responses: {
      '200': {
        description: 'LaundryfeatureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LaundryfeatureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LaundryfeatureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<LaundryfeatureMaster>
  ): Promise<LaundryfeatureMaster> {
    return this.laundryfeatureMasterRepository.findById(id, filter);
  }

  @patch('/laundryfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'LaundryfeatureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LaundryfeatureMaster, {partial: true}),
        },
      },
    })
    laundryfeatureMaster: LaundryfeatureMaster,
  ): Promise<void> {
    await this.laundryfeatureMasterRepository.updateById(id, laundryfeatureMaster);
  }

  @put('/laundryfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'LaundryfeatureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() laundryfeatureMaster: LaundryfeatureMaster,
  ): Promise<void> {
    await this.laundryfeatureMasterRepository.replaceById(id, laundryfeatureMaster);
  }

  @del('/laundryfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'LaundryfeatureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.laundryfeatureMasterRepository.deleteById(id);
  }
}
