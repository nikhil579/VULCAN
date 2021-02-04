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
import {BusinessMaster} from '../models';
import {BusinessMasterRepository} from '../repositories';

export class BusinessMasterController {
  constructor(
    @repository(BusinessMasterRepository)
    public businessMasterRepository : BusinessMasterRepository,
  ) {}

  @post('/business-masters', {
    responses: {
      '200': {
        description: 'BusinessMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(BusinessMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessMaster, {
            title: 'NewBusinessMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    businessMaster: Omit<BusinessMaster, 'id'>,
  ): Promise<BusinessMaster> {
    return this.businessMasterRepository.create(businessMaster);
  }

  @get('/business-masters/count', {
    responses: {
      '200': {
        description: 'BusinessMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(BusinessMaster) where?: Where<BusinessMaster>,
  ): Promise<Count> {
    return this.businessMasterRepository.count(where);
  }

  @get('/business-masters', {
    responses: {
      '200': {
        description: 'Array of BusinessMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BusinessMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(BusinessMaster) filter?: Filter<BusinessMaster>,
  ): Promise<BusinessMaster[]> {
    return this.businessMasterRepository.find(filter);
  }

  @patch('/business-masters', {
    responses: {
      '200': {
        description: 'BusinessMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessMaster, {partial: true}),
        },
      },
    })
    businessMaster: BusinessMaster,
    @param.where(BusinessMaster) where?: Where<BusinessMaster>,
  ): Promise<Count> {
    return this.businessMasterRepository.updateAll(businessMaster, where);
  }

  @get('/business-masters/{id}', {
    responses: {
      '200': {
        description: 'BusinessMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BusinessMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BusinessMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<BusinessMaster>
  ): Promise<BusinessMaster> {
    return this.businessMasterRepository.findById(id, filter);
  }

  @patch('/business-masters/{id}', {
    responses: {
      '204': {
        description: 'BusinessMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BusinessMaster, {partial: true}),
        },
      },
    })
    businessMaster: BusinessMaster,
  ): Promise<void> {
    await this.businessMasterRepository.updateById(id, businessMaster);
  }

  @put('/business-masters/{id}', {
    responses: {
      '204': {
        description: 'BusinessMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() businessMaster: BusinessMaster,
  ): Promise<void> {
    await this.businessMasterRepository.replaceById(id, businessMaster);
  }

  @del('/business-masters/{id}', {
    responses: {
      '204': {
        description: 'BusinessMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.businessMasterRepository.deleteById(id);
  }
}
