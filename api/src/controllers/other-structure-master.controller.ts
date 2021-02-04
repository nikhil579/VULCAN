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
import {OtherstructureMaster} from '../models';
import {OtherstructureMasterRepository} from '../repositories';

export class OtherStructureMasterController {
  constructor(
    @repository(OtherstructureMasterRepository)
    public otherstructureMasterRepository : OtherstructureMasterRepository,
  ) {}

  @post('/otherstructure-masters', {
    responses: {
      '200': {
        description: 'OtherstructureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(OtherstructureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherstructureMaster, {
            title: 'NewOtherstructureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    otherstructureMaster: Omit<OtherstructureMaster, 'id'>,
  ): Promise<OtherstructureMaster> {
    return this.otherstructureMasterRepository.create(otherstructureMaster);
  }

  @get('/otherstructure-masters/count', {
    responses: {
      '200': {
        description: 'OtherstructureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OtherstructureMaster) where?: Where<OtherstructureMaster>,
  ): Promise<Count> {
    return this.otherstructureMasterRepository.count(where);
  }

  @get('/otherstructure-masters', {
    responses: {
      '200': {
        description: 'Array of OtherstructureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OtherstructureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OtherstructureMaster) filter?: Filter<OtherstructureMaster>,
  ): Promise<OtherstructureMaster[]> {
    return this.otherstructureMasterRepository.find(filter);
  }

  @patch('/otherstructure-masters', {
    responses: {
      '200': {
        description: 'OtherstructureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherstructureMaster, {partial: true}),
        },
      },
    })
    otherstructureMaster: OtherstructureMaster,
    @param.where(OtherstructureMaster) where?: Where<OtherstructureMaster>,
  ): Promise<Count> {
    return this.otherstructureMasterRepository.updateAll(otherstructureMaster, where);
  }

  @get('/otherstructure-masters/{id}', {
    responses: {
      '200': {
        description: 'OtherstructureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OtherstructureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OtherstructureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<OtherstructureMaster>
  ): Promise<OtherstructureMaster> {
    return this.otherstructureMasterRepository.findById(id, filter);
  }

  @patch('/otherstructure-masters/{id}', {
    responses: {
      '204': {
        description: 'OtherstructureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OtherstructureMaster, {partial: true}),
        },
      },
    })
    otherstructureMaster: OtherstructureMaster,
  ): Promise<void> {
    await this.otherstructureMasterRepository.updateById(id, otherstructureMaster);
  }

  @put('/otherstructure-masters/{id}', {
    responses: {
      '204': {
        description: 'OtherstructureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() otherstructureMaster: OtherstructureMaster,
  ): Promise<void> {
    await this.otherstructureMasterRepository.replaceById(id, otherstructureMaster);
  }

  @del('/otherstructure-masters/{id}', {
    responses: {
      '204': {
        description: 'OtherstructureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.otherstructureMasterRepository.deleteById(id);
  }
}
