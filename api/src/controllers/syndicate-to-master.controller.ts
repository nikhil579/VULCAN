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
import {SyndicatetoMaster} from '../models';
import {SyndicatetoMasterRepository} from '../repositories';

export class SyndicateToMasterController {
  constructor(
    @repository(SyndicatetoMasterRepository)
    public syndicatetoMasterRepository : SyndicatetoMasterRepository,
  ) {}

  @post('/syndicateto-masters', {
    responses: {
      '200': {
        description: 'SyndicatetoMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(SyndicatetoMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SyndicatetoMaster, {
            title: 'NewSyndicatetoMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    syndicatetoMaster: Omit<SyndicatetoMaster, 'id'>,
  ): Promise<SyndicatetoMaster> {
    return this.syndicatetoMasterRepository.create(syndicatetoMaster);
  }

  @get('/syndicateto-masters/count', {
    responses: {
      '200': {
        description: 'SyndicatetoMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SyndicatetoMaster) where?: Where<SyndicatetoMaster>,
  ): Promise<Count> {
    return this.syndicatetoMasterRepository.count(where);
  }

  @get('/syndicateto-masters', {
    responses: {
      '200': {
        description: 'Array of SyndicatetoMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SyndicatetoMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SyndicatetoMaster) filter?: Filter<SyndicatetoMaster>,
  ): Promise<SyndicatetoMaster[]> {
    return this.syndicatetoMasterRepository.find(filter);
  }

  @patch('/syndicateto-masters', {
    responses: {
      '200': {
        description: 'SyndicatetoMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SyndicatetoMaster, {partial: true}),
        },
      },
    })
    syndicatetoMaster: SyndicatetoMaster,
    @param.where(SyndicatetoMaster) where?: Where<SyndicatetoMaster>,
  ): Promise<Count> {
    return this.syndicatetoMasterRepository.updateAll(syndicatetoMaster, where);
  }

  @get('/syndicateto-masters/{id}', {
    responses: {
      '200': {
        description: 'SyndicatetoMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SyndicatetoMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SyndicatetoMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<SyndicatetoMaster>
  ): Promise<SyndicatetoMaster> {
    return this.syndicatetoMasterRepository.findById(id, filter);
  }

  @patch('/syndicateto-masters/{id}', {
    responses: {
      '204': {
        description: 'SyndicatetoMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SyndicatetoMaster, {partial: true}),
        },
      },
    })
    syndicatetoMaster: SyndicatetoMaster,
  ): Promise<void> {
    await this.syndicatetoMasterRepository.updateById(id, syndicatetoMaster);
  }

  @put('/syndicateto-masters/{id}', {
    responses: {
      '204': {
        description: 'SyndicatetoMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() syndicatetoMaster: SyndicatetoMaster,
  ): Promise<void> {
    await this.syndicatetoMasterRepository.replaceById(id, syndicatetoMaster);
  }

  @del('/syndicateto-masters/{id}', {
    responses: {
      '204': {
        description: 'SyndicatetoMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.syndicatetoMasterRepository.deleteById(id);
  }
}
