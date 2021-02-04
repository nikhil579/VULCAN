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
import {StructureMaster} from '../models';
import {StructureMasterRepository} from '../repositories';

export class StructureMasterController {
  constructor(
    @repository(StructureMasterRepository)
    public structureMasterRepository : StructureMasterRepository,
  ) {}

  @post('/structure-masters', {
    responses: {
      '200': {
        description: 'StructureMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(StructureMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StructureMaster, {
            title: 'NewStructureMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    structureMaster: Omit<StructureMaster, 'id'>,
  ): Promise<StructureMaster> {
    return this.structureMasterRepository.create(structureMaster);
  }

  @get('/structure-masters/count', {
    responses: {
      '200': {
        description: 'StructureMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(StructureMaster) where?: Where<StructureMaster>,
  ): Promise<Count> {
    return this.structureMasterRepository.count(where);
  }

  @get('/structure-masters', {
    responses: {
      '200': {
        description: 'Array of StructureMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(StructureMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(StructureMaster) filter?: Filter<StructureMaster>,
  ): Promise<StructureMaster[]> {
    return this.structureMasterRepository.find(filter);
  }

  @patch('/structure-masters', {
    responses: {
      '200': {
        description: 'StructureMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StructureMaster, {partial: true}),
        },
      },
    })
    structureMaster: StructureMaster,
    @param.where(StructureMaster) where?: Where<StructureMaster>,
  ): Promise<Count> {
    return this.structureMasterRepository.updateAll(structureMaster, where);
  }

  @get('/structure-masters/{id}', {
    responses: {
      '200': {
        description: 'StructureMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(StructureMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StructureMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<StructureMaster>
  ): Promise<StructureMaster> {
    return this.structureMasterRepository.findById(id, filter);
  }

  @patch('/structure-masters/{id}', {
    responses: {
      '204': {
        description: 'StructureMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StructureMaster, {partial: true}),
        },
      },
    })
    structureMaster: StructureMaster,
  ): Promise<void> {
    await this.structureMasterRepository.updateById(id, structureMaster);
  }

  @put('/structure-masters/{id}', {
    responses: {
      '204': {
        description: 'StructureMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() structureMaster: StructureMaster,
  ): Promise<void> {
    await this.structureMasterRepository.replaceById(id, structureMaster);
  }

  @del('/structure-masters/{id}', {
    responses: {
      '204': {
        description: 'StructureMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.structureMasterRepository.deleteById(id);
  }
}
