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
import {SeverMaster} from '../models';
import {SeverMasterRepository} from '../repositories';

export class SewerMasterController {
  constructor(
    @repository(SeverMasterRepository)
    public severMasterRepository : SeverMasterRepository,
  ) {}

  @post('/sever-masters', {
    responses: {
      '200': {
        description: 'SeverMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(SeverMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeverMaster, {
            title: 'NewSeverMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    severMaster: Omit<SeverMaster, 'id'>,
  ): Promise<SeverMaster> {
    return this.severMasterRepository.create(severMaster);
  }

  @get('/sever-masters/count', {
    responses: {
      '200': {
        description: 'SeverMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SeverMaster) where?: Where<SeverMaster>,
  ): Promise<Count> {
    return this.severMasterRepository.count(where);
  }

  @get('/sever-masters', {
    responses: {
      '200': {
        description: 'Array of SeverMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SeverMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SeverMaster) filter?: Filter<SeverMaster>,
  ): Promise<SeverMaster[]> {
    return this.severMasterRepository.find(filter);
  }

  @patch('/sever-masters', {
    responses: {
      '200': {
        description: 'SeverMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeverMaster, {partial: true}),
        },
      },
    })
    severMaster: SeverMaster,
    @param.where(SeverMaster) where?: Where<SeverMaster>,
  ): Promise<Count> {
    return this.severMasterRepository.updateAll(severMaster, where);
  }

  @get('/sever-masters/{id}', {
    responses: {
      '200': {
        description: 'SeverMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SeverMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SeverMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<SeverMaster>
  ): Promise<SeverMaster> {
    return this.severMasterRepository.findById(id, filter);
  }

  @patch('/sever-masters/{id}', {
    responses: {
      '204': {
        description: 'SeverMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeverMaster, {partial: true}),
        },
      },
    })
    severMaster: SeverMaster,
  ): Promise<void> {
    await this.severMasterRepository.updateById(id, severMaster);
  }

  @put('/sever-masters/{id}', {
    responses: {
      '204': {
        description: 'SeverMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() severMaster: SeverMaster,
  ): Promise<void> {
    await this.severMasterRepository.replaceById(id, severMaster);
  }

  @del('/sever-masters/{id}', {
    responses: {
      '204': {
        description: 'SeverMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.severMasterRepository.deleteById(id);
  }
}
