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
import {WindowfeatureMaster} from '../models';
import {WindowfeatureMasterRepository} from '../repositories';

export class WindowFeatureMasterController {
  constructor(
    @repository(WindowfeatureMasterRepository)
    public windowfeatureMasterRepository : WindowfeatureMasterRepository,
  ) {}

  @post('/windowfeature-masters', {
    responses: {
      '200': {
        description: 'WindowfeatureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(WindowfeatureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WindowfeatureMaster, {
            title: 'NewWindowfeatureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    windowfeatureMaster: Omit<WindowfeatureMaster, 'id'>,
  ): Promise<WindowfeatureMaster> {
    return this.windowfeatureMasterRepository.create(windowfeatureMaster);
  }

  @get('/windowfeature-masters/count', {
    responses: {
      '200': {
        description: 'WindowfeatureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(WindowfeatureMaster) where?: Where<WindowfeatureMaster>,
  ): Promise<Count> {
    return this.windowfeatureMasterRepository.count(where);
  }

  @get('/windowfeature-masters', {
    responses: {
      '200': {
        description: 'Array of WindowfeatureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(WindowfeatureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(WindowfeatureMaster) filter?: Filter<WindowfeatureMaster>,
  ): Promise<WindowfeatureMaster[]> {
    return this.windowfeatureMasterRepository.find(filter);
  }

  @patch('/windowfeature-masters', {
    responses: {
      '200': {
        description: 'WindowfeatureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WindowfeatureMaster, {partial: true}),
        },
      },
    })
    windowfeatureMaster: WindowfeatureMaster,
    @param.where(WindowfeatureMaster) where?: Where<WindowfeatureMaster>,
  ): Promise<Count> {
    return this.windowfeatureMasterRepository.updateAll(windowfeatureMaster, where);
  }

  @get('/windowfeature-masters/{id}', {
    responses: {
      '200': {
        description: 'WindowfeatureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(WindowfeatureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(WindowfeatureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<WindowfeatureMaster>
  ): Promise<WindowfeatureMaster> {
    return this.windowfeatureMasterRepository.findById(id, filter);
  }

  @patch('/windowfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'WindowfeatureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WindowfeatureMaster, {partial: true}),
        },
      },
    })
    windowfeatureMaster: WindowfeatureMaster,
  ): Promise<void> {
    await this.windowfeatureMasterRepository.updateById(id, windowfeatureMaster);
  }

  @put('/windowfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'WindowfeatureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() windowfeatureMaster: WindowfeatureMaster,
  ): Promise<void> {
    await this.windowfeatureMasterRepository.replaceById(id, windowfeatureMaster);
  }

  @del('/windowfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'WindowfeatureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.windowfeatureMasterRepository.deleteById(id);
  }
}
