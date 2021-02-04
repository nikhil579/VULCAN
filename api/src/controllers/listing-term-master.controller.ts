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
import {ListingtermMaster} from '../models';
import {ListingtermMasterRepository} from '../repositories';

export class ListingTermMasterController {
  constructor(
    @repository(ListingtermMasterRepository)
    public listingtermMasterRepository : ListingtermMasterRepository,
  ) {}

  @post('/listingterm-masters', {
    responses: {
      '200': {
        description: 'ListingtermMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(ListingtermMaster)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListingtermMaster, {
            title: 'NewListingtermMaster',
            exclude: ['id'],
          }),
        },
      },
    })
    listingtermMaster: Omit<ListingtermMaster, 'id'>,
  ): Promise<ListingtermMaster> {
    return this.listingtermMasterRepository.create(listingtermMaster);
  }

  @get('/listingterm-masters/count', {
    responses: {
      '200': {
        description: 'ListingtermMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ListingtermMaster) where?: Where<ListingtermMaster>,
  ): Promise<Count> {
    return this.listingtermMasterRepository.count(where);
  }

  @get('/listingterm-masters', {
    responses: {
      '200': {
        description: 'Array of ListingtermMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ListingtermMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ListingtermMaster) filter?: Filter<ListingtermMaster>,
  ): Promise<ListingtermMaster[]> {
    return this.listingtermMasterRepository.find(filter);
  }

  @patch('/listingterm-masters', {
    responses: {
      '200': {
        description: 'ListingtermMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListingtermMaster, {partial: true}),
        },
      },
    })
    listingtermMaster: ListingtermMaster,
    @param.where(ListingtermMaster) where?: Where<ListingtermMaster>,
  ): Promise<Count> {
    return this.listingtermMasterRepository.updateAll(listingtermMaster, where);
  }

  @get('/listingterm-masters/{id}', {
    responses: {
      '200': {
        description: 'ListingtermMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ListingtermMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListingtermMaster, {exclude: 'where'}) filter?: FilterExcludingWhere<ListingtermMaster>
  ): Promise<ListingtermMaster> {
    return this.listingtermMasterRepository.findById(id, filter);
  }

  @patch('/listingterm-masters/{id}', {
    responses: {
      '204': {
        description: 'ListingtermMaster PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListingtermMaster, {partial: true}),
        },
      },
    })
    listingtermMaster: ListingtermMaster,
  ): Promise<void> {
    await this.listingtermMasterRepository.updateById(id, listingtermMaster);
  }

  @put('/listingterm-masters/{id}', {
    responses: {
      '204': {
        description: 'ListingtermMaster PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listingtermMaster: ListingtermMaster,
  ): Promise<void> {
    await this.listingtermMasterRepository.replaceById(id, listingtermMaster);
  }

  @del('/listingterm-masters/{id}', {
    responses: {
      '204': {
        description: 'ListingtermMaster DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listingtermMasterRepository.deleteById(id);
  }
}
