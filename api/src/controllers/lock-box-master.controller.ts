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
import {LockboxMaster} from '../models';
import {LockboxMasterRepository} from '../repositories';

export class LockBoxMasterController {
  constructor(
    @repository(LockboxMasterRepository)
    public lockboxMasterRepository : LockboxMasterRepository,
  ) {}

  @post('/lockbox-masters', {
    responses: {
      '200': {
        description: 'LockboxMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(LockboxMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LockboxMaster, {
            title: 'NewLockboxMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    lockboxMaster: Omit<LockboxMaster, 'id'>,
  ): Promise<LockboxMaster> {
    return this.lockboxMasterRepository.create(lockboxMaster);
  }

  @get('/lockbox-masters/count', {
    responses: {
      '200': {
        description: 'LockboxMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(LockboxMaster) where?: Where<LockboxMaster>,
  ): Promise<Count> {
    return this.lockboxMasterRepository.count(where);
  }

  @get('/lockbox-masters', {
    responses: {
      '200': {
        description: 'Array of LockboxMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(LockboxMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(LockboxMaster) filter?: Filter<LockboxMaster>,
  ): Promise<LockboxMaster[]> {
    return this.lockboxMasterRepository.find(filter);
  }

  @patch('/lockbox-masters', {
    responses: {
      '200': {
        description: 'LockboxMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LockboxMaster, {partial: true}),
        },
      },
    })
    lockboxMaster: LockboxMaster,
    @param.where(LockboxMaster) where?: Where<LockboxMaster>,
  ): Promise<Count> {
    return this.lockboxMasterRepository.updateAll(lockboxMaster, where);
  }

  @get('/lockbox-masters/{id}', {
    responses: {
      '200': {
        description: 'LockboxMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LockboxMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LockboxMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<LockboxMaster>
  ): Promise<LockboxMaster> {
    return this.lockboxMasterRepository.findById(id, filter);
  }

  @patch('/lockbox-masters/{id}', {
    responses: {
      '204': {
        description: 'LockboxMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LockboxMaster, {partial: true}),
        },
      },
    })
    lockboxMaster: LockboxMaster,
  ): Promise<void> {
    await this.lockboxMasterRepository.updateById(id, lockboxMaster);
  }

  @put('/lockbox-masters/{id}', {
    responses: {
      '204': {
        description: 'LockboxMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lockboxMaster: LockboxMaster,
  ): Promise<void> {
    await this.lockboxMasterRepository.replaceById(id, lockboxMaster);
  }

  @del('/lockbox-masters/{id}', {
    responses: {
      '204': {
        description: 'LockboxMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.lockboxMasterRepository.deleteById(id);
  }
}
