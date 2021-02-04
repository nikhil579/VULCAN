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
import {CurrentuseMaster} from '../models';
import {CurrentuseMasterRepository} from '../repositories';

export class CurrentUseMasterController {
  constructor(
    @repository(CurrentuseMasterRepository)
    public currentuseMasterRepository : CurrentuseMasterRepository,
  ) {}

  @post('/currentuse-masters', {
    responses: {
      '200': {
        description: 'CurrentuseMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(CurrentuseMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentuseMaster, {
            title: 'NewCurrentuseMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    currentuseMaster: Omit<CurrentuseMaster, 'id'>,
  ): Promise<CurrentuseMaster> {
    return this.currentuseMasterRepository.create(currentuseMaster);
  }

  @get('/currentuse-masters/count', {
    responses: {
      '200': {
        description: 'CurrentuseMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CurrentuseMaster) where?: Where<CurrentuseMaster>,
  ): Promise<Count> {
    return this.currentuseMasterRepository.count(where);
  }

  @get('/currentuse-masters', {
    responses: {
      '200': {
        description: 'Array of CurrentuseMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CurrentuseMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CurrentuseMaster) filter?: Filter<CurrentuseMaster>,
  ): Promise<CurrentuseMaster[]> {
    return this.currentuseMasterRepository.find(filter);
  }

  @patch('/currentuse-masters', {
    responses: {
      '200': {
        description: 'CurrentuseMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentuseMaster, {partial: true}),
        },
      },
    })
    currentuseMaster: CurrentuseMaster,
    @param.where(CurrentuseMaster) where?: Where<CurrentuseMaster>,
  ): Promise<Count> {
    return this.currentuseMasterRepository.updateAll(currentuseMaster, where);
  }

  @get('/currentuse-masters/{id}', {
    responses: {
      '200': {
        description: 'CurrentuseMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CurrentuseMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CurrentuseMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<CurrentuseMaster>
  ): Promise<CurrentuseMaster> {
    return this.currentuseMasterRepository.findById(id, filter);
  }

  @patch('/currentuse-masters/{id}', {
    responses: {
      '204': {
        description: 'CurrentuseMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CurrentuseMaster, {partial: true}),
        },
      },
    })
    currentuseMaster: CurrentuseMaster,
  ): Promise<void> {
    await this.currentuseMasterRepository.updateById(id, currentuseMaster);
  }

  @put('/currentuse-masters/{id}', {
    responses: {
      '204': {
        description: 'CurrentuseMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() currentuseMaster: CurrentuseMaster,
  ): Promise<void> {
    await this.currentuseMasterRepository.replaceById(id, currentuseMaster);
  }

  @del('/currentuse-masters/{id}', {
    responses: {
      '204': {
        description: 'CurrentuseMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.currentuseMasterRepository.deleteById(id);
  }
}
