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
import {FencingMaster} from '../models';
import {FencingMasterRepository} from '../repositories';

export class FencingMasterController {
  constructor(
    @repository(FencingMasterRepository)
    public fencingMasterRepository : FencingMasterRepository,
  ) {}

  @post('/fencing-masters', {
    responses: {
      '200': {
        description: 'FencingMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(FencingMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FencingMaster, {
            title: 'NewFencingMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    fencingMaster: Omit<FencingMaster, 'id'>,
  ): Promise<FencingMaster> {
    return this.fencingMasterRepository.create(fencingMaster);
  }

  @get('/fencing-masters/count', {
    responses: {
      '200': {
        description: 'FencingMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FencingMaster) where?: Where<FencingMaster>,
  ): Promise<Count> {
    return this.fencingMasterRepository.count(where);
  }

  @get('/fencing-masters', {
    responses: {
      '200': {
        description: 'Array of FencingMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FencingMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FencingMaster) filter?: Filter<FencingMaster>,
  ): Promise<FencingMaster[]> {
    return this.fencingMasterRepository.find(filter);
  }

  @patch('/fencing-masters', {
    responses: {
      '200': {
        description: 'FencingMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FencingMaster, {partial: true}),
        },
      },
    })
    fencingMaster: FencingMaster,
    @param.where(FencingMaster) where?: Where<FencingMaster>,
  ): Promise<Count> {
    return this.fencingMasterRepository.updateAll(fencingMaster, where);
  }

  @get('/fencing-masters/{id}', {
    responses: {
      '200': {
        description: 'FencingMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FencingMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FencingMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<FencingMaster>
  ): Promise<FencingMaster> {
    return this.fencingMasterRepository.findById(id, filter);
  }

  @patch('/fencing-masters/{id}', {
    responses: {
      '204': {
        description: 'FencingMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FencingMaster, {partial: true}),
        },
      },
    })
    fencingMaster: FencingMaster,
  ): Promise<void> {
    await this.fencingMasterRepository.updateById(id, fencingMaster);
  }

  @put('/fencing-masters/{id}', {
    responses: {
      '204': {
        description: 'FencingMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fencingMaster: FencingMaster,
  ): Promise<void> {
    await this.fencingMasterRepository.replaceById(id, fencingMaster);
  }

  @del('/fencing-masters/{id}', {
    responses: {
      '204': {
        description: 'FencingMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fencingMasterRepository.deleteById(id);
  }
}
