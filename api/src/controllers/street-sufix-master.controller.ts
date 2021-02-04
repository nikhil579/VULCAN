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
import {StreetsufixMaster} from '../models';
import {StreetsufixMasterRepository} from '../repositories';

export class StreetSufixMasterController {
  constructor(
    @repository(StreetsufixMasterRepository)
    public streetsufixMasterRepository : StreetsufixMasterRepository,
  ) {}

  @post('/streetsufix-masters', {
    responses: {
      '200': {
        description: 'StreetsufixMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(StreetsufixMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StreetsufixMaster, {
            title: 'NewStreetsufixMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    streetsufixMaster: Omit<StreetsufixMaster, 'id'>,
  ): Promise<StreetsufixMaster> {
    return this.streetsufixMasterRepository.create(streetsufixMaster);
  }

  @get('/streetsufix-masters/count', {
    responses: {
      '200': {
        description: 'StreetsufixMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(StreetsufixMaster) where?: Where<StreetsufixMaster>,
  ): Promise<Count> {
    return this.streetsufixMasterRepository.count(where);
  }

  @get('/streetsufix-masters', {
    responses: {
      '200': {
        description: 'Array of StreetsufixMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(StreetsufixMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(StreetsufixMaster) filter?: Filter<StreetsufixMaster>,
  ): Promise<StreetsufixMaster[]> {
    return this.streetsufixMasterRepository.find(filter);
  }

  @patch('/streetsufix-masters', {
    responses: {
      '200': {
        description: 'StreetsufixMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StreetsufixMaster, {partial: true}),
        },
      },
    })
    streetsufixMaster: StreetsufixMaster,
    @param.where(StreetsufixMaster) where?: Where<StreetsufixMaster>,
  ): Promise<Count> {
    return this.streetsufixMasterRepository.updateAll(streetsufixMaster, where);
  }

  @get('/streetsufix-masters/{id}', {
    responses: {
      '200': {
        description: 'StreetsufixMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(StreetsufixMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StreetsufixMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<StreetsufixMaster>
  ): Promise<StreetsufixMaster> {
    return this.streetsufixMasterRepository.findById(id, filter);
  }

  @patch('/streetsufix-masters/{id}', {
    responses: {
      '204': {
        description: 'StreetsufixMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StreetsufixMaster, {partial: true}),
        },
      },
    })
    streetsufixMaster: StreetsufixMaster,
  ): Promise<void> {
    await this.streetsufixMasterRepository.updateById(id, streetsufixMaster);
  }

  @put('/streetsufix-masters/{id}', {
    responses: {
      '204': {
        description: 'StreetsufixMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() streetsufixMaster: StreetsufixMaster,
  ): Promise<void> {
    await this.streetsufixMasterRepository.replaceById(id, streetsufixMaster);
  }

  @del('/streetsufix-masters/{id}', {
    responses: {
      '204': {
        description: 'StreetsufixMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.streetsufixMasterRepository.deleteById(id);
  }
}
