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
import {LotfeatureMaster} from '../models';
import {LotfeatureMasterRepository} from '../repositories';

export class LotFeatureMasterController {
  constructor(
    @repository(LotfeatureMasterRepository)
    public lotfeatureMasterRepository : LotfeatureMasterRepository,
  ) {}

  @post('/lotfeature-masters', {
    responses: {
      '200': {
        description: 'LotfeatureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(LotfeatureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LotfeatureMaster, {
            title: 'NewLotfeatureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    lotfeatureMaster: Omit<LotfeatureMaster, 'id'>,
  ): Promise<LotfeatureMaster> {
    return this.lotfeatureMasterRepository.create(lotfeatureMaster);
  }

  @get('/lotfeature-masters/count', {
    responses: {
      '200': {
        description: 'LotfeatureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(LotfeatureMaster) where?: Where<LotfeatureMaster>,
  ): Promise<Count> {
    return this.lotfeatureMasterRepository.count(where);
  }

  @get('/lotfeature-masters', {
    responses: {
      '200': {
        description: 'Array of LotfeatureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(LotfeatureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(LotfeatureMaster) filter?: Filter<LotfeatureMaster>,
  ): Promise<LotfeatureMaster[]> {
    return this.lotfeatureMasterRepository.find(filter);
  }

  @patch('/lotfeature-masters', {
    responses: {
      '200': {
        description: 'LotfeatureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LotfeatureMaster, {partial: true}),
        },
      },
    })
    lotfeatureMaster: LotfeatureMaster,
    @param.where(LotfeatureMaster) where?: Where<LotfeatureMaster>,
  ): Promise<Count> {
    return this.lotfeatureMasterRepository.updateAll(lotfeatureMaster, where);
  }

  @get('/lotfeature-masters/{id}', {
    responses: {
      '200': {
        description: 'LotfeatureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LotfeatureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LotfeatureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<LotfeatureMaster>
  ): Promise<LotfeatureMaster> {
    return this.lotfeatureMasterRepository.findById(id, filter);
  }

  @patch('/lotfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'LotfeatureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LotfeatureMaster, {partial: true}),
        },
      },
    })
    lotfeatureMaster: LotfeatureMaster,
  ): Promise<void> {
    await this.lotfeatureMasterRepository.updateById(id, lotfeatureMaster);
  }

  @put('/lotfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'LotfeatureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lotfeatureMaster: LotfeatureMaster,
  ): Promise<void> {
    await this.lotfeatureMasterRepository.replaceById(id, lotfeatureMaster);
  }

  @del('/lotfeature-masters/{id}', {
    responses: {
      '204': {
        description: 'LotfeatureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.lotfeatureMasterRepository.deleteById(id);
  }
}
