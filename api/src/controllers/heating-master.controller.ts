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
import {HeatingMaster} from '../models';
import {HeatingMasterRepository} from '../repositories';

export class HeatingMasterController {
  constructor(
    @repository(HeatingMasterRepository)
    public heatingMasterRepository : HeatingMasterRepository,
  ) {}

  @post('/heating-masters', {
    responses: {
      '200': {
        description: 'HeatingMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(HeatingMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeatingMaster, {
            title: 'NewHeatingMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    heatingMaster: Omit<HeatingMaster, 'id'>,
  ): Promise<HeatingMaster> {
    return this.heatingMasterRepository.create(heatingMaster);
  }

  @get('/heating-masters/count', {
    responses: {
      '200': {
        description: 'HeatingMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(HeatingMaster) where?: Where<HeatingMaster>,
  ): Promise<Count> {
    return this.heatingMasterRepository.count(where);
  }

  @get('/heating-masters', {
    responses: {
      '200': {
        description: 'Array of HeatingMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(HeatingMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(HeatingMaster) filter?: Filter<HeatingMaster>,
  ): Promise<HeatingMaster[]> {
    return this.heatingMasterRepository.find(filter);
  }

  @patch('/heating-masters', {
    responses: {
      '200': {
        description: 'HeatingMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeatingMaster, {partial: true}),
        },
      },
    })
    heatingMaster: HeatingMaster,
    @param.where(HeatingMaster) where?: Where<HeatingMaster>,
  ): Promise<Count> {
    return this.heatingMasterRepository.updateAll(heatingMaster, where);
  }

  @get('/heating-masters/{id}', {
    responses: {
      '200': {
        description: 'HeatingMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(HeatingMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HeatingMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<HeatingMaster>
  ): Promise<HeatingMaster> {
    return this.heatingMasterRepository.findById(id, filter);
  }

  @patch('/heating-masters/{id}', {
    responses: {
      '204': {
        description: 'HeatingMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HeatingMaster, {partial: true}),
        },
      },
    })
    heatingMaster: HeatingMaster,
  ): Promise<void> {
    await this.heatingMasterRepository.updateById(id, heatingMaster);
  }

  @put('/heating-masters/{id}', {
    responses: {
      '204': {
        description: 'HeatingMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() heatingMaster: HeatingMaster,
  ): Promise<void> {
    await this.heatingMasterRepository.replaceById(id, heatingMaster);
  }

  @del('/heating-masters/{id}', {
    responses: {
      '204': {
        description: 'HeatingMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.heatingMasterRepository.deleteById(id);
  }
}
