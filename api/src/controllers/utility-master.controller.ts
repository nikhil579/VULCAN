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
import {UtilityMaster} from '../models';
import {UtilityMasterRepository} from '../repositories';

export class UtilityMasterController {
  constructor(
    @repository(UtilityMasterRepository)
    public utilityMasterRepository : UtilityMasterRepository,
  ) {}

  @post('/utility-masters', {
    responses: {
      '200': {
        description: 'UtilityMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(UtilityMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UtilityMaster, {
            title: 'NewUtilityMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    utilityMaster: Omit<UtilityMaster, 'id'>,
  ): Promise<UtilityMaster> {
    return this.utilityMasterRepository.create(utilityMaster);
  }

  @get('/utility-masters/count', {
    responses: {
      '200': {
        description: 'UtilityMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(UtilityMaster) where?: Where<UtilityMaster>,
  ): Promise<Count> {
    return this.utilityMasterRepository.count(where);
  }

  @get('/utility-masters', {
    responses: {
      '200': {
        description: 'Array of UtilityMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(UtilityMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(UtilityMaster) filter?: Filter<UtilityMaster>,
  ): Promise<UtilityMaster[]> {
    return this.utilityMasterRepository.find(filter);
  }

  @patch('/utility-masters', {
    responses: {
      '200': {
        description: 'UtilityMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UtilityMaster, {partial: true}),
        },
      },
    })
    utilityMaster: UtilityMaster,
    @param.where(UtilityMaster) where?: Where<UtilityMaster>,
  ): Promise<Count> {
    return this.utilityMasterRepository.updateAll(utilityMaster, where);
  }

  @get('/utility-masters/{id}', {
    responses: {
      '200': {
        description: 'UtilityMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(UtilityMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UtilityMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<UtilityMaster>
  ): Promise<UtilityMaster> {
    return this.utilityMasterRepository.findById(id, filter);
  }

  @patch('/utility-masters/{id}', {
    responses: {
      '204': {
        description: 'UtilityMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UtilityMaster, {partial: true}),
        },
      },
    })
    utilityMaster: UtilityMaster,
  ): Promise<void> {
    await this.utilityMasterRepository.updateById(id, utilityMaster);
  }

  @put('/utility-masters/{id}', {
    responses: {
      '204': {
        description: 'UtilityMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() utilityMaster: UtilityMaster,
  ): Promise<void> {
    await this.utilityMasterRepository.replaceById(id, utilityMaster);
  }

  @del('/utility-masters/{id}', {
    responses: {
      '204': {
        description: 'UtilityMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.utilityMasterRepository.deleteById(id);
  }
}
