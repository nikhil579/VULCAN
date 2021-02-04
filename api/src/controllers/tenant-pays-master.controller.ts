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
import {TenantpaysMaster} from '../models';
import {TenantpaysMasterRepository} from '../repositories';

export class TenantPaysMasterController {
  constructor(
    @repository(TenantpaysMasterRepository)
    public tenantpaysMasterRepository : TenantpaysMasterRepository,
  ) {}

  @post('/tenantpays-masters', {
    responses: {
      '200': {
        description: 'TenantpaysMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(TenantpaysMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TenantpaysMaster, {
            title: 'NewTenantpaysMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    tenantpaysMaster: Omit<TenantpaysMaster, 'id'>,
  ): Promise<TenantpaysMaster> {
    return this.tenantpaysMasterRepository.create(tenantpaysMaster);
  }

  @get('/tenantpays-masters/count', {
    responses: {
      '200': {
        description: 'TenantpaysMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TenantpaysMaster) where?: Where<TenantpaysMaster>,
  ): Promise<Count> {
    return this.tenantpaysMasterRepository.count(where);
  }

  @get('/tenantpays-masters', {
    responses: {
      '200': {
        description: 'Array of TenantpaysMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TenantpaysMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TenantpaysMaster) filter?: Filter<TenantpaysMaster>,
  ): Promise<TenantpaysMaster[]> {
    return this.tenantpaysMasterRepository.find(filter);
  }

  @patch('/tenantpays-masters', {
    responses: {
      '200': {
        description: 'TenantpaysMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TenantpaysMaster, {partial: true}),
        },
      },
    })
    tenantpaysMaster: TenantpaysMaster,
    @param.where(TenantpaysMaster) where?: Where<TenantpaysMaster>,
  ): Promise<Count> {
    return this.tenantpaysMasterRepository.updateAll(tenantpaysMaster, where);
  }

  @get('/tenantpays-masters/{id}', {
    responses: {
      '200': {
        description: 'TenantpaysMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TenantpaysMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TenantpaysMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<TenantpaysMaster>
  ): Promise<TenantpaysMaster> {
    return this.tenantpaysMasterRepository.findById(id, filter);
  }

  @patch('/tenantpays-masters/{id}', {
    responses: {
      '204': {
        description: 'TenantpaysMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TenantpaysMaster, {partial: true}),
        },
      },
    })
    tenantpaysMaster: TenantpaysMaster,
  ): Promise<void> {
    await this.tenantpaysMasterRepository.updateById(id, tenantpaysMaster);
  }

  @put('/tenantpays-masters/{id}', {
    responses: {
      '204': {
        description: 'TenantpaysMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tenantpaysMaster: TenantpaysMaster,
  ): Promise<void> {
    await this.tenantpaysMasterRepository.replaceById(id, tenantpaysMaster);
  }

  @del('/tenantpays-masters/{id}', {
    responses: {
      '204': {
        description: 'TenantpaysMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tenantpaysMasterRepository.deleteById(id);
  }
}
