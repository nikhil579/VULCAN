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
import {CommonwallMaster} from '../models';
import {CommonwallMasterRepository} from '../repositories';

export class CommonWallMasterController {
  constructor(
    @repository(CommonwallMasterRepository)
    public commonwallMasterRepository : CommonwallMasterRepository,
  ) {}

  @post('/commonwall-masters', {
    responses: {
      '200': {
        description: 'CommonwallMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(CommonwallMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CommonwallMaster, {
            title: 'NewCommonwallMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    commonwallMaster: Omit<CommonwallMaster, 'id'>,
  ): Promise<CommonwallMaster> {
    return this.commonwallMasterRepository.create(commonwallMaster);
  }

  @get('/commonwall-masters/count', {
    responses: {
      '200': {
        description: 'CommonwallMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CommonwallMaster) where?: Where<CommonwallMaster>,
  ): Promise<Count> {
    return this.commonwallMasterRepository.count(where);
  }

  @get('/commonwall-masters', {
    responses: {
      '200': {
        description: 'Array of CommonwallMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CommonwallMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CommonwallMaster) filter?: Filter<CommonwallMaster>,
  ): Promise<CommonwallMaster[]> {
    return this.commonwallMasterRepository.find(filter);
  }

  @patch('/commonwall-masters', {
    responses: {
      '200': {
        description: 'CommonwallMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CommonwallMaster, {partial: true}),
        },
      },
    })
    commonwallMaster: CommonwallMaster,
    @param.where(CommonwallMaster) where?: Where<CommonwallMaster>,
  ): Promise<Count> {
    return this.commonwallMasterRepository.updateAll(commonwallMaster, where);
  }

  @get('/commonwall-masters/{id}', {
    responses: {
      '200': {
        description: 'CommonwallMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CommonwallMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CommonwallMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<CommonwallMaster>
  ): Promise<CommonwallMaster> {
    return this.commonwallMasterRepository.findById(id, filter);
  }

  @patch('/commonwall-masters/{id}', {
    responses: {
      '204': {
        description: 'CommonwallMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CommonwallMaster, {partial: true}),
        },
      },
    })
    commonwallMaster: CommonwallMaster,
  ): Promise<void> {
    await this.commonwallMasterRepository.updateById(id, commonwallMaster);
  }

  @put('/commonwall-masters/{id}', {
    responses: {
      '204': {
        description: 'CommonwallMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() commonwallMaster: CommonwallMaster,
  ): Promise<void> {
    await this.commonwallMasterRepository.replaceById(id, commonwallMaster);
  }

  @del('/commonwall-masters/{id}', {
    responses: {
      '204': {
        description: 'CommonwallMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.commonwallMasterRepository.deleteById(id);
  }
}
