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
import {PropertyMaster} from '../models';
import {PropertyMasterRepository} from '../repositories';

export class PropertyMasterController {
  constructor(
    @repository(PropertyMasterRepository)
    public propertyMasterRepository : PropertyMasterRepository,
  ) {}

  @post('/property-masters', {
    responses: {
      '200': {
        description: 'PropertyMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(PropertyMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyMaster, {
            title: 'NewPropertyMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    propertyMaster: Omit<PropertyMaster, 'id'>,
  ): Promise<PropertyMaster> {
    return this.propertyMasterRepository.create(propertyMaster);
  }

  @get('/property-masters/count', {
    responses: {
      '200': {
        description: 'PropertyMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PropertyMaster) where?: Where<PropertyMaster>,
  ): Promise<Count> {
    return this.propertyMasterRepository.count(where);
  }

  @get('/property-masters', {
    responses: {
      '200': {
        description: 'Array of PropertyMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PropertyMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PropertyMaster) filter?: Filter<PropertyMaster>,
  ): Promise<PropertyMaster[]> {
    return this.propertyMasterRepository.find(filter);
  }

  @patch('/property-masters', {
    responses: {
      '200': {
        description: 'PropertyMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyMaster, {partial: true}),
        },
      },
    })
    propertyMaster: PropertyMaster,
    @param.where(PropertyMaster) where?: Where<PropertyMaster>,
  ): Promise<Count> {
    return this.propertyMasterRepository.updateAll(propertyMaster, where);
  }

  @get('/property-masters/{id}', {
    responses: {
      '200': {
        description: 'PropertyMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PropertyMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PropertyMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<PropertyMaster>
  ): Promise<PropertyMaster> {
    return this.propertyMasterRepository.findById(id, filter);
  }

  @patch('/property-masters/{id}', {
    responses: {
      '204': {
        description: 'PropertyMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PropertyMaster, {partial: true}),
        },
      },
    })
    propertyMaster: PropertyMaster,
  ): Promise<void> {
    await this.propertyMasterRepository.updateById(id, propertyMaster);
  }

  @put('/property-masters/{id}', {
    responses: {
      '204': {
        description: 'PropertyMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() propertyMaster: PropertyMaster,
  ): Promise<void> {
    await this.propertyMasterRepository.replaceById(id, propertyMaster);
  }

  @del('/property-masters/{id}', {
    responses: {
      '204': {
        description: 'PropertyMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.propertyMasterRepository.deleteById(id);
  }
}
